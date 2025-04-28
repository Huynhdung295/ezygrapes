export default `
.slider-trigger-area {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
}

.slider-wrapper-desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.swiper.card-swiper-custom {
  visibility: hidden;
  height: 0;
}

.card-slider-slide {
  position: relative;
  width: calc(100% / 3);
  height: calc(100vw / 2);
  max-width: 460px;
  max-height: 540px;
  margin-left: -120px;
  margin-right: -60px;
  padding: 10px;
  border-radius: 20px;
  overflow: hidden;
  background: transparent;
  text-decoration: none;
  box-sizing: border-box;
  transition: transform 0.3s ease, z-index 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-slider-slide:first-child {
  margin-left: 0;
}
.card-slider-slide:last-child {
  margin-right: 0;
}
.slider-top {
  text-align: center;
  margin-bottom: 30px;
  
  }
.card-slider-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.card-slider-slide.hovering {
  transform: scale(1.2);
  z-index: 10;
}

.slider-bottom-button {
  margin-top: 30px;
  text-align: center;
  background: #eee;
  padding: 12px 24px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
}

.slider-bottom-button a {
  text-decoration: none;
}

@media (max-width: 480px) {
  .slider-wrapper-desktop {
    display: none;
  }

  .swiper.card-swiper-custom {
    visibility: visible;
    width: 240px;
    height: 320px;
    overflow: visible;
    position: relative;
  }

  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eee;
    border-radius: 20px;
  }

  .swiper-slide .card-slider-slide {
    width: 100%;
    height: 100%;
    padding: 10px;
    margin-right: 0;
  }
  .swiper-slide .card-slider-slide:last-child {
    margin-right: 0;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}
`;
