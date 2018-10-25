# Example usage: rake translations:generate
require 'i18n'

namespace :translations do
  # Source directory which contain yaml file.
  LOCALE_DIR = 'config/locales'
  # Destination directory which contains newly generated translation.
  TRANSLATIONS_DIR = 'translations'

  desc 'create faux and json translations for query tool from yml files'
  task :generate do
    begin
      Rake::Task['faux_translation:generate'].invoke(SqlParser::Application.config.i18n.default_locale)

      translate_folder(LOCALE_DIR)
      puts 'JSON Translations Updated'
    rescue Errno::EACCES
      puts "Folder #{TRANSLATIONS_DIR} cannot be created. Permission denied."
    end
  end

  def translate_folder(folder)
    Dir.foreach(folder) do |file|
      next if file.start_with?('.') # Folder references or hidden files
      full_path = "#{folder}/#{file}"
      if file.end_with?('.yml')
        translate_file(full_path)
      elsif File.directory?(full_path)
        translate_folder(full_path)
      else
        puts "Skipped: #{full_path} is not a .yml file or a directory."
      end
    end
  rescue TypeError
    puts 'locale folder cannot be nil'
  rescue Errno::ENOENT
    puts "No such folder: #{folder}"
  end

  def translate_file(yaml_file)
    file_path = yaml_file.sub("#{LOCALE_DIR}/", '')
    yaml_key = file_path.match(/^([^\/\.]*)/).to_s
    javascript_translations = YAML.load(File.read(yaml_file))[yaml_key]

    return if javascript_translations.nil?

    # add locale to hash and convert to json
    javascript_translations = JSON.pretty_generate(flatten_hash javascript_translations)
    javascript_translations.gsub!('%{', '{')
    file_name = file_path.sub('.yml', '')
    javascript_file_name = file_name
    javascript_file_path = "#{TRANSLATIONS_DIR}/#{javascript_file_name}.json"

    File.open(javascript_file_path, 'w') do |file|
      file.write("#{javascript_translations}\n")
    end
    puts "Generated file: #{javascript_file_path}"
  rescue Errno::ENOENT => e
    if File.exist?(yaml_file)
      puts "No such folder #{File.dirname(File.dirname(js_file_path))}"
    else
      puts "No such file #{yaml_file}"
    end
  end

  # js translations require flattened representation to be used with Terra
  def flatten_hash(param, prefix = nil)
    param.each_pair.reduce({}) do |h, (k, v)|
      v.is_a?(Hash) ? h.merge(flatten_hash(v, "#{prefix}#{k}.")) : h.merge("#{prefix}#{k}".to_sym => v)
    end
  end
end
