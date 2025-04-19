export default (editor) => {
  return {
    run(editor) {
      const pn = editor.Panels;
      const btn = pn.getButton('options', 'sw-visibility');
      btn.set('active', !btn.get('active'));
    }
  }
}
