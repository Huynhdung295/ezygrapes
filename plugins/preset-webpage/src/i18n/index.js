import grapesjsVi from '@grapesjs/core/locale/vi';
import en from './en.json';
import vi from './vi.json';

const i18n = {
  addI18nMessages: (editor) => {
    editor.I18n.addMessages({
      en,
      vi: {
        ...grapesjsVi,
        ...vi,
      },
    });
  },
};

export default i18n;
