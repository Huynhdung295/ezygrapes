import editHtml from './edit-html';
import openImport from './open-import';
import toggleBorder from './toggle-border';
import previewHtml from './preview-html';

import {
  cmdEditHtml,
  cmdImport,
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear,
  cmdToggleBorder,
  cmdPreviewHtml,
} from './../consts';

export default (editor, config) => {
  const cm = editor.Commands;
  const txtConfirm = editor.I18n.t('are_you_sure_to_clean_the_canvas');

  cm.add(cmdEditHtml, editHtml(editor, config));
  cm.add(cmdImport, openImport(editor, config));
  cm.add(cmdDeviceDesktop, (e) => e.setDevice('Desktop'));
  cm.add(cmdDeviceTablet, (e) => e.setDevice('Tablet'));
  cm.add(cmdDeviceMobile, (e) => e.setDevice('Mobile portrait'));
  cm.add(cmdClear, (e) => confirm(txtConfirm) && e.runCommand('core:canvas-clear'));
  cm.add(cmdToggleBorder, toggleBorder(editor, config));
  cm.add(cmdPreviewHtml, previewHtml(editor, config));
};
