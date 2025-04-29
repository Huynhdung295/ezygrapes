import genHtml from '../utils/genHtml';

export default (editor, config) => {
  return {
    run(editor) {
      const html = editor.getHtml();
      const css = editor.getCss();

      const exportedHtml = genHtml(html, css);

      editor.Modal.open({
        title: 'Export Code',
        content: `
          <div>
            <h4>HTML</h4>
            <textarea style="width:100%;height:150px;">${exportedHtml}</textarea>
          </div>
        `,
        attributes: { class: 'custom-code-modal' },
      });
    },
  };
};
