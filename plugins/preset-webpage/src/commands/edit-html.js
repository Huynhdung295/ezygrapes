export default (editor, config) => {
  const pfx = editor.getConfig('stylePrefix');
  const modal = editor.Modal;
  const codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  const container = document.createElement('div');
  container.style.height = '70vh';
  
  var btnEdit = document.createElement('button');
  codeViewer.set({
    codeName: 'htmlmixed',
    readOnly: 0,
    theme: 'hopscotch',
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true
  });

  btnEdit.innerHTML = editor.I18n.t('edit');
  btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-edit-html';
  btnEdit.onclick = function() {
    var code = codeViewer.editor.getValue();
    editor.DomComponents.getWrapper().set('content', '');
    editor.setComponents(code.trim());
    modal.close();
  };
  
  codeViewer.set({ ...{
    ccodeName: 'htmlmixed',
    readOnly: 0,
    theme: 'hopscotch',
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true
  }, ...config.editHtmlViewerOptions});
  
  return {
    run(editor) {
      var viewer = codeViewer.editor;
      if (!viewer) {
        var txtarea = document.createElement('textarea');
        container.appendChild(txtarea);
        container.appendChild(btnEdit);
        codeViewer.init(txtarea);
        viewer = codeViewer.editor;
        viewer.setSize('100%', 'calc(70vh - 35px)');
        viewer.getWrapperElement().classList.add('gjs-cm-editor');
      }
      var innerHtml = editor.getHtml();
      var css = editor.getCss();
      modal.setTitle(editor.I18n.t('edit_html'));
      modal.setContent('');
      modal.setContent(container);
      codeViewer.setContent(innerHtml + "<style>" + css + '</style>');
      modal
        .open()
        .getModel()
        .once('change:open', () => editor.stopCommand(this.id));
      viewer.refresh();
    },
  
    stop() {
    modal.close();
    }
  }
}
  