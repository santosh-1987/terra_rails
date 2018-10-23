import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.maximize": "Maximize",
  "Terra.actionHeader.minimize": "Minimize",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.alert.advisory": "Advisory.",
  "Terra.alert.alert": "Alert.",
  "Terra.alert.dismiss": "Dismiss",
  "Terra.alert.error": "Error.",
  "Terra.alert.info": "Information.",
  "Terra.alert.success": "Success.",
  "Terra.alert.warning": "Warning.",
  "Terra.collapsibleMenuView.more": "More",
  "Terra.form.field.optional": "(optional)",
  "Terra.menu.back": "Back",
  "Terra.menu.close": "Close"
};
const areTranslationsLoaded = true;
const locale = 'en';
export {
  areTranslationsLoaded,
  locale,
  messages
};