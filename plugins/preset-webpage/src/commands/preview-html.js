import genHtml from '../utils/genHtml';

export default (editor, config) => {
  return {
    run(editor) {
      const html = editor.getHtml();
      const css = editor.getCss();
      const exportedHtml = genHtml(html, css);

      const blob = new Blob([exportedHtml], { type: 'text/html' });
      const blobUrl = URL.createObjectURL(blob);

      const previewWindow = window.open(blobUrl, '_blank');

      if (!previewWindow) {
        const iframe = document.createElement('iframe');
        iframe.src = blobUrl;

        Object.assign(iframe.style, {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          zIndex: 9999,
        });

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = "<i class='fas fa-times'></i>";
        Object.assign(closeBtn.style, {
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 10000,
          padding: '10px 15px',
          fontSize: '16px',
          background: '#ff4d4f',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        });

        closeBtn.onclick = () => {
          document.body.removeChild(iframe);
          document.body.removeChild(closeBtn);
        };

        document.body.appendChild(iframe);
        document.body.appendChild(closeBtn);
      }
    },
  };
};
