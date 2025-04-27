import ezygrapes from 'ezygrapes';
import loadComponents from './components';
import loadBlocks from './blocks';
import C from './consts';

export default ezygrapes.plugins.add(C.pluginId, (editor, opts = {}) => {
  const config = {
    blocks: [C.ref],
    ...opts,
  };

  loadComponents(editor, config);
  loadBlocks(editor, config);
});
