export default (editor) => {
  const domc = editor.DomComponents;
  const defaultType = domc.getType('default');
  const defaultView = defaultType.view;

  domc.addType('card-slider-slide', {
    model: {
      defaults: {
        name: 'Card Slide',
        script: function () {
          this.addEventListener('click', () => {
            const wrapper = this.parentElement;
            const slides = Array.from(wrapper.querySelectorAll('.card-slider-slide'));
            const clickedIndex = slides.indexOf(this);
            const activeSlide = wrapper.querySelector('.card-slider-slide.active');
            const activeIndex = slides.indexOf(activeSlide);

            if (clickedIndex === activeIndex) return;

            const total = slides.length;
            const centerIndex = Math.floor(total / 2);
            const rotateBy = (clickedIndex - centerIndex + total) % total;

            const reordered = [...slides.slice(rotateBy), ...slides.slice(0, rotateBy)];

            reordered.forEach((slide, idx) => {
              const distance = idx - centerIndex;
              let offset = 0;
              let scale = 0.8;

              if (distance === -2) offset = -260;
              else if (distance === -1) offset = -145;
              else if (distance === 0) {
                offset = 0;
                scale = 1.2;
              } else if (distance === 1) offset = 145;
              else if (distance === 2) offset = 260;
              else offset = distance * 300;

              slide.style.transform = `translate(calc(-50% + ${offset}px), -50%) scale(${scale})`;
              slide.style.zIndex = 10 - Math.abs(distance);
              slide.classList.toggle('active', idx === centerIndex);
            });
          });
        },
      },
    },
    view: defaultView,
  });
};
