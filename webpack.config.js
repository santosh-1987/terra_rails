// For inspiration on your webpack configuration, see:
// https://github.com/shakacode/react_on_rails/tree/master/spec/dummy/client
// https://github.com/shakacode/react-webpack-rails-tutorial/tree/master/client

const { resolve } = require('path');
const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfigLoader = require('react-on-rails/webpackConfigLoader');
const imagesFileLoaderOptions = { name: 'images/[hash].[ext]' };
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const Autoprefixer = require('autoprefixer');
const CustomProperties = require('postcss-custom-properties');


const configPath = resolve('config');
const { output, settings } = webpackConfigLoader(configPath);

const isHMR = settings.server.hmr;
const devBuild = process.env.NODE_ENV !== 'production';

const config = {

    context: resolve(__dirname),

    entry: {
        'home-bundle': [
            'es5-shim/es5-shim',
            'es5-shim/es5-sham',
            'babel-polyfill',
            './app/javascript/packs/home-bundle.jsx',
        ],
    },

    output: {
        // Name comes from the entry section.
        filename: isHMR ? '[name]-[hash].js' : '[name]-[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].chunk.js',

        publicPath: output.publicPath,
        path: output.path,
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'aggregated-translations'), 'node_modules'],
        alias: {
            react: path.resolve(__dirname, 'node_modules', 'react'),
            'react-on-rails': path.resolve(__dirname, 'node_modules', 'react-on-rails'),
            'react-intl': path.resolve(__dirname, 'node_modules/react-intl'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        },
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false,
        }),
        new ManifestPlugin({ publicPath: output.publicPath, writeToFileEmit: true }),
        new I18nAggregatorPlugin({
            baseDirectory: __dirname,
            supportedLocales: ['en-US', 'en-GB', 'fi-FI', 'sv-SE'],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],

    module: {
        rules: [
            {
                test: require.resolve('react'),
                use: {
                    loader: 'imports-loader',
                    options: {
                        shim: 'es5-shim/es5-shim',
                        sham: 'es5-shim/es5-sham',
                    },
                },
            },
            {
                test: /\.(scss|css|less)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins() {
                                return [
                                    Autoprefixer({
                                        browsers: [
                                            'ie >= 10',
                                            'last 2 versions',
                                            'last 2 android versions',
                                            'last 2 and_chr versions',
                                            'iOS >= 8',
                                        ],
                                    }),
                                    CustomProperties(),
                                ];
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: imagesFileLoaderOptions,
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                },
            },
        ],
    },
};

const aggregateTranslations = require('terra-i18n/scripts/aggregate-translations/aggregate-translations');

const aggregateOptions = {
    baseDir: __dirname,
    directories: ['./translations'],
    locales: ['en-US', 'en-GB', 'fi-FI', 'sv-SE'],
    outputDir: './aggregated-translations',
};

aggregateTranslations(aggregateOptions);

module.exports = config;

if (devBuild) {
    console.log('Webpack dev build for Rails'); // eslint-disable-line no-console
    module.exports.devtool = 'eval-source-map';
} else {
    console.log('Webpack production build for Rails'); // eslint-disable-line no-console
}
