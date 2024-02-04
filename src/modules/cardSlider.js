import Swiper from "swiper";
import { Navigation } from "swiper/modules";
const cardSlider = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
};

export default cardSlider;
