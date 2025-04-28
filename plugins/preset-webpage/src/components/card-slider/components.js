export default (editor) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultView = defaultType.view;

  domc.addType('card-slider-slide', {
    model: {
      defaults: {
        name: 'Card Slide',
        tagName: 'a',
        draggable: true,
        droppable: true,
        traits: [
          {
            type: 'text',
            label: 'Link URL',
            name: 'href',
            placeholder: 'https://your-link.com',
            changeProp: 1,
          },
          {
            type: 'select',
            label: 'Link Target',
            name: 'target',
            options: [
              { id: '_self', name: 'Same Tab' },
              { id: '_blank', name: 'New Tab' },
            ],
          },
        ],
        attributes: {
          href: '',
          target: '_self',
        },
        script: function () {
          const el = this;

          const transformMap = [
            { scale: 1, translateX: 0, zIndex: 10 },
            { scale: 0.9, translateX: 9.25, zIndex: 9 },
            { scale: 0.8, translateX: 18.5, zIndex: 8 },
            { scale: 0.7, translateX: 27.75, zIndex: 7 },
            { scale: 0.6, translateX: 37, zIndex: 6 },
          ];

          function applyHoverEffect(siblings, index) {
            siblings.forEach((sib, idx) => {
              sib.style.transition = 'transform 0.3s ease, z-index 0.3s ease';

              const distance = Math.abs(idx - index);
              const transform = transformMap[distance];

              if (transform) {
                sib.style.transform = `translate3d(${transform.translateX}px, 0px, 0px) scale3d(${transform.scale}, ${transform.scale}, ${transform.scale})`;
                sib.style.zIndex = transform.zIndex;
              } else {
                sib.style.transform = '';
                sib.style.zIndex = '';
              }
            });
          }

          el.addEventListener('mouseenter', () => {
            const siblings = Array.from(el.parentElement.querySelectorAll('.card-slider-slide'));
            const index = siblings.indexOf(el);
            applyHoverEffect(siblings, index);
          });

          const siblings = Array.from(el.parentElement.querySelectorAll('.card-slider-slide'));
          if (siblings.length > 2) {
            applyHoverEffect(siblings, 2);
          }
          if (typeof Swiper !== 'undefined') {
            new Swiper('.card-swiper-custom', {
              effect: 'cards',
              grabCursor: true,
              initialSlide: 0,
              loop: true,
              speed: 600,
              cardsEffect: {
                perSlideRotate: 0,
                perSlideOffset: 15,
              },
            });
          }
        },
      },
      init() {
        this.on('change:href', () => {
          const href = this.get('href');
          if (href !== undefined) {
            this.addAttributes({ href });
          }
        });

        this.on('change:target', () => {
          const target = this.get('target') || '_self';
          if (target !== undefined) {
            this.addAttributes({ target });
          }
        });
      },
    },
    view: defaultView,
  });

  domc.addType('image', {
    extend: 'image',
    model: {
      defaults: {
        traits: [
          {
            type: 'text',
            label: 'Image URL',
            name: 'src',
            placeholder: 'https://your-image.com/image.png',
            changeProp: 1,
          },
          {
            type: 'text',
            label: 'Alt Text',
            name: 'alt',
            placeholder: 'Description',
            changeProp: 1,
          },
        ],
      },
    },
  });
};
