const loadEnUSIntl = () =>
require.ensure([],
  require => require('intl/locale-data/jsonp/en-US.js'),
  'en-US-intl-local');

const loadEnGBIntl = () =>
require.ensure([],
  require => require('intl/locale-data/jsonp/en-GB.js'),
  'en-GB-intl-local');

const loadFiFIIntl = () =>
require.ensure([],
  require => require('intl/locale-data/jsonp/fi-FI.js'),
  'fi-FI-intl-local');

const loadSvSEIntl = () =>
require.ensure([],
  require => require('intl/locale-data/jsonp/sv-SE.js'),
  'sv-SE-intl-local');

const loadEnIntl = () =>
require.ensure([],
  require => require('intl/locale-data/jsonp/en.js'),
  'en-intl-local');

const intlLoaders = {
  'en-US': loadEnUSIntl,
  'en-GB': loadEnGBIntl,
  'fi-FI': loadFiFIIntl,
  'sv-SE': loadSvSEIntl,
  'en': loadEnIntl
};

module.exports = intlLoaders;