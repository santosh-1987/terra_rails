import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.previous": "Previous",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.maximize": "Maximise",
  "Terra.actionHeader.minimize": "Minimise",
  "Terra.alert.dismiss": "Dismiss",
  "Terra.alert.info": "Information.",
  "Terra.alert.error": "Error.",
  "Terra.alert.warning": "Warning.",
  "Terra.alert.alert": "Alert.",
  "Terra.alert.advisory": "Advisory.",
  "Terra.alert.success": "Success.",
  "Terra.collapsibleMenuView.more": "More",
  "Terra.form.field.optional": "(optional)",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.menu.back": "Back",
  "Terra.menu.close": "Close"
};
const areTranslationsLoaded = true;
const locale = 'en-GB';
export {
  areTranslationsLoaded,
  locale,
  messages
};