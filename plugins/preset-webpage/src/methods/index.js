export default (editor) => {
  editor.getInnerHtml = function() {
    let html = editor.getHtml();
    const startIdx = html.indexOf('<body>');
    if (startIdx >= 0) {
        const endIdx = html.indexOf('</body>');
        if (endIdx > startIdx) {
          html = html.substring(startIdx + 6, endIdx);
        }
    }
    return html;
  }

  editor.getInnerCss = function() {
    return editor.getCss({ avoidProtected: true });
  }

  editor.getMergedCssHtml = function() {
      return `<style>${editor.getInnerCss()}</style>${editor.getHtml()}<script>${editor.getJs()}</script>`;
  }
}
