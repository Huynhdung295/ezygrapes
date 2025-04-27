export default `
.card-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  overflow: hidden;
}
.slider-top-text {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}
.slider-wrapper {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
}
.card-slider-slide {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 260px;
  height: 350px;
  border-radius: 20px;
  overflow: hidden;
  background: #eee;
  cursor: pointer;
  transition: transform 0.5s ease, z-index 0.5s ease;
}
.card-slider-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slider-bottom-button {
  margin-top: 20px;
  padding: 10px 20px;
  background: #eee;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
}
@media (max-width: 768px) {
  .card-slider-slide {
    width: 180px;
    height: 240px;
  }
}
`;
