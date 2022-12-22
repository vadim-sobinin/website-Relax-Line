import { arrowShowHide, unBlockBody, blockBody } from "./helpers";
import Swiper, { Navigation, Pagination, Controller, Grid } from "swiper";
export const transparency = () => {
  const transparencySlider = new Swiper(".transparency-slider", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: "#transparency-arrow_right",
      prevEl: "#transparency-arrow_left",
    },

    breakpoints: {
      1091: {
        loop: false,
        slidesPerView: 3,
      },
    },
  });

  // arrowShowHide(transparencySlider);
  const transparencyModalBlock = document.querySelector(".popup-transparency");
  document
    .querySelector(".transparency-slider-wrap")
    .addEventListener("click", (e) => {
      if (e.target.closest(".transparency-item__img")) {
        transparencyModalBlock.style.visibility = "visible";
        blockBody();
      }
    });
  transparencyModalBlock.addEventListener("click", (e) => {
    if (e.target.closest(".close")) {
      transparencyModalBlock.style.visibility = "hidden";
      unBlockBody();
    }
  });

  const transparencyModalSlider = new Swiper(".popup-transparency-slider", {
    modules: [Navigation, Grid, Pagination],
    navigation: {
      nextEl: "#transparency_right",
      prevEl: "#transparency_left",
    },
    pagination: {
      el: "#transparency-popup-counter",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return `<div class="slider-counter-content">
        <div class="slider-counter-content__current ${currentClass}"></div>
        <div class="slider-counter-content__total ${totalClass}"></div>
      </div>`;
      },
    },
  });
  arrowShowHide(transparencyModalSlider);
};
