import C from './consts';
import styleSlider from './styles';

const sliders = [
  { src: '', alt: 'Card 1', href: '' },
  { src: '', alt: 'Card 2', href: '' },
  { src: '', alt: 'Card 3', href: '' },
  { src: '', alt: 'Card 4', href: '' },
  { src: '', alt: 'Card 5', href: '' },
];

const generateDesktopSlides = () =>
  sliders
    .map(
      ({ src, alt, href }) => `
    <a class="card-slider-slide" href="${href}" target="_self" data-gjs-type="card-slider-slide">
      <img src="${src}" alt="${alt}" data-gjs-type="image" />
    </a>
  `,
    )
    .join('');

const generateMobileSlides = () =>
  sliders
    .map(
      ({ src, alt, href }) => `
        <div class="swiper-slide">
          <a class="card-slider-slide" href="${href}" target="_self" data-gjs-type="card-slider-slide">
            <img src="${src}" alt="${alt}" data-gjs-type="image" />
          </a>
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
      <div class="slider-trigger-area">
       <div class="slider-top">
         <h2>Explore Our Series</h2>
         <h6>Discover the latest trends and insights</h6>
      </div>
        <div class="slider-wrapper-desktop">
          ${generateDesktopSlides()}
        </div>
        <div class="swiper card-swiper-custom">
          <div class="swiper-wrapper">
            ${generateMobileSlides()}
          </div>
        </div>
        <div class="slider-bottom-button">
          <a href="#" target="_self" data-gjs-type="card-slider-slide">Explore Series</a>
        </div>
      </div>
    `,
  });
};
