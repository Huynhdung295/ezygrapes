function generatePageFullHtml(html, css, js) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exported Page</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
      <style>${css}</style>
    </head>
    <body>
      ${html}
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js"></script>
      <script>${js}</script>
    </body>
    </html>
  `.trim();
}
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
