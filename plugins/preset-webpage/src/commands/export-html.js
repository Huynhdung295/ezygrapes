import genHtml from '../utils/genHtml';

export default (editor, config) => {
  return {
    run(editor) {
      const html = editor.getHtml();
      const css = editor.getCss();
      const exportedHtml = genHtml(html, css);

      const modalContent = document.createElement('div');

      const info = document.createElement('p');
      info.textContent = 'Click the button below to copy exported HTML + CSS code to clipboard.';
      modalContent.appendChild(info);

      const button = document.createElement('button');
      button.textContent = '📋 Copy to Clipboard';
      button.style.cssText = 'padding: 8px 16px; font-weight: bold; cursor: pointer;';
      modalContent.appendChild(button);

      const notice = document.createElement('div');
      notice.style.cssText = 'margin-top:10px; color:green; display:none;';
      notice.textContent = '✅ Code copied!';
      modalContent.appendChild(notice);

      button.onclick = () => {
        navigator.clipboard.writeText(exportedHtml).then(() => {
          notice.style.display = 'block';
        });
      };

      editor.Modal.open({
        title: 'Export Code',
        content: modalContent,
        attributes: { class: 'custom-code-modal' },
      });
    },
  };
};
