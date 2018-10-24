import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fi';

addLocaleData(localeData);

const messages = {
  "Terra.actionHeader.close": "Kiinni",
  "Terra.actionHeader.back": "Takaisin",
  "Terra.actionHeader.previous": "Edellinen",
  "Terra.actionHeader.next": "Seuraava",
  "Terra.actionHeader.maximize": "Maksimoida",
  "Terra.actionHeader.minimize": "Minimoida",
  "Terra.alert.dismiss": "Verwerfen~n9KZ Pi",
  "Terra.alert.info": "Informações~n9KZ Pi.",
  "Terra.alert.error": "Erreur~n9KZ Pi.",
  "Terra.alert.warning": "Avertissement~n9KZ Pi.",
  "Terra.alert.alert": "Benachrichtigung~n9KZ Pi.",
  "Terra.alert.advisory": "Recommandation~n9KZ Pi.",
  "Terra.alert.success": "Erfolgreich~n9KZ Pi.",
  "Terra.collapsibleMenuView.more": "More",
  "Terra.form.field.optional": "(optional)2384932**",
  "Terra.ajax.error": "This content failed to load.n9KZ Pi~",
  "Terra.menu.back": "Takaisin",
  "Terra.menu.close": "Kiinni"
};
const areTranslationsLoaded = true;
const locale = 'fi-FI';
export {
  areTranslationsLoaded,
  locale,
  messages
};