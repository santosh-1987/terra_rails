const loadEnUSTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('en-US.js');
    callback.call(scope, i18n);
  }, 'en-US-translations');
};

const loadEnGBTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('en-GB.js');
    callback.call(scope, i18n);
  }, 'en-GB-translations');
};

const loadFiFITranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('fi-FI.js');
    callback.call(scope, i18n);
  }, 'fi-FI-translations');
};

const loadSvSETranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('sv-SE.js');
    callback.call(scope, i18n);
  }, 'sv-SE-translations');
};

const loadEnTranslations = (callback, scope) => {
  require.ensure([], (require) => {
    // eslint-disable-next-line
    const i18n = require('en.js');
    callback.call(scope, i18n);
  }, 'en-translations');
};

const translationsLoaders = {
  'en-US': loadEnUSTranslations,
  'en-GB': loadEnGBTranslations,
  'fi-FI': loadFiFITranslations,
  'sv-SE': loadSvSETranslations,
  'en': loadEnTranslations
};

module.exports = translationsLoaders;