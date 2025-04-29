import generatePageFullHtml from "../utils/generate-page-full-html";

export default (editor) => {
  editor.getInnerHtml = function () {
    let html = editor.getHtml();
    const startIdx = html.indexOf('<body>');
    const endIdx = html.indexOf('</body>');

    if (startIdx >= 0 && endIdx > startIdx) {
      html = html.substring(startIdx + 6, endIdx);
    }

    return html;
  };

  editor.getInnerCss = function () {
    return editor.getCss({ avoidProtected: true });
  };

  editor.getMergedCssHtml = function () {
    const css = this.getInnerCss();
    const html = this.getHtml();
    const js = this.getJs();

    return `<style>${css}</style>${html}<script>${js}</script>`;
  };

  editor.generatePageFullHtml = function () {
    const html = this.getInnerHtml();
    const css = this.getInnerCss();
    const js = this.getJs();

    return generatePageFullHtml(html, css, js);
  };
};
