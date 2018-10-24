import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/sv';

addLocaleData(localeData);

const messages = {
  "Terra.actionHeader.back": "Tillbaka",
  "Terra.actionHeader.close": "Stäng",
  "Terra.actionHeader.maximize": "Maximera",
  "Terra.actionHeader.minimize": "Minimera",
  "Terra.actionHeader.next": "Nästa",
  "Terra.actionHeader.previous": "Föregående",
  "Terra.alert.advisory": "Rådgivning.",
  "Terra.alert.alert": "Avisering.",
  "Terra.alert.dismiss": "Avfärda",
  "Terra.alert.error": "Fel.",
  "Terra.alert.info": "Information.",
  "Terra.alert.success": "Klar.",
  "Terra.alert.warning": "Varning.",
  "Terra.collapsibleMenuView.more": "Mer",
  "Terra.form.field.optional": "(valfri)",
  "Terra.ajax.error": "Innehållet lästes inte in.",
  "Terra.menu.back": "Tillbaka",
  "Terra.menu.close": "Close"
};
const areTranslationsLoaded = true;
const locale = 'sv-SE';
export {
  areTranslationsLoaded,
  locale,
  messages
};