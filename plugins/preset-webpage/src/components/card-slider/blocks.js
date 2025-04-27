import C from './consts';
import styleSlider from './styles';

const sliders = [
  { src: '', alt: '', offset: -260, zIndex: 6, scale: 0.8 },
  { src: '', alt: '', offset: -145, zIndex: 8, scale: 0.8 },
  { src: '', alt: '', offset: 0, zIndex: 10, scale: 1.2, active: true },
  { src: '', alt: '', offset: 145, zIndex: 8, scale: 0.8 },
  { src: '', alt: '', offset: 260, zIndex: 6, scale: 0.8 },
];

const generateSlides = () =>
  sliders
    .map(
      ({ src, offset, zIndex, scale, active, alt }) => `
    <div class="card-slider-slide ${active ? 'active' : ''}" 
         data-gjs-type="card-slider-slide"
         style="transform: translate(calc(-50% + ${offset}px), -50%) scale(${scale}); z-index: ${zIndex};">
      <img src="${src}" alt="${alt}" />
    </div>
  `,
    )
    .join('');

export default (editor) => {
  const bm = editor.BlockManager;

  editor.addStyle(styleSlider);

  bm.add(C.ref, {
    label: C.label,
    category: editor.I18n.t(C.category),
    attributes: { class: 'fa fa-images' },
    content: `
      <div class="${C.clsPfx}">
        <div class="slider-top-text">A Series Of Themed Stories</div>
        <div class="slider-wrapper">
          ${generateSlides()}
        </div>
        <div class="slider-bottom-button">Explore Series</div>
      </div>
    `,
  });
};
