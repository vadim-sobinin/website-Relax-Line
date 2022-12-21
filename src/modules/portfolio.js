import Swiper, { Navigation, Pagination, Controller, Grid } from "swiper";
import { blockBody, unBlockBody } from "./helpers";

export const portfolio = () => {
  const portfolioSlider = new Swiper(".portfolio-slider", {
    modules: [Navigation, Pagination, Grid],
    slidesPerView: 1,
    slidesPerColumn: 1,
    grid: {
      rows: 1,
    },
    navigation: {
      nextEl: "#portfolio-arrow_right",
      prevEl: "#portfolio-arrow_left",
    },
    pagination: {
      el: "#portfolio-counter",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return `<div class="slider-counter-content">
        <div class="slider-counter-content__current ${currentClass}"></div>
        <div class="slider-counter-content__total ${totalClass}"></div>
      </div>`;
      },
    },
    breakpoints: {
      // when window width is >= 320px
      901: {
        grid: {
          rows: 2,
        },
        slidesPerView: 2,
      },
      1025: {
        grid: {
          rows: 2,
        },
        slidesPerView: 3,
      },
    },
  });

  const portfolioSlides = document.querySelectorAll(
    ".portfolio-slider__slide-frame"
  );

  portfolioSlider.on("snapGridLengthChange", () =>
    portfolioSlides.forEach(
      (slide) =>
        (slide.style.height = 100 / portfolioSlider.params.grid.rows + "%")
    )
  );
  portfolioSlides.forEach(
    (slide) =>
      (slide.style.height = 100 / portfolioSlider.params.grid.rows + "%")
  );

  const portfolioPopupSlider = new Swiper(".popup-portfolio-slider", {
    modules: [Navigation, Pagination, Controller, Grid],
    navigation: {
      nextEl: "#popup_portfolio_right",
      prevEl: "#popup_portfolio_left",
    },
    pagination: {
      el: "#popup-portfolio-counter",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return `<div class="slider-counter-content">
        <div class="slider-counter-content__current ${currentClass}"></div>
        <div class="slider-counter-content__total ${totalClass}"></div>
      </div>`;
      },
    },
  });

  const portfolioPopupTextSlider = new Swiper(".popup_text_swiper", {
    modules: [Controller, Grid],
  });
  portfolioPopupTextSlider.disable();
  portfolioPopupSlider.controller.control = portfolioPopupTextSlider;

  const arrowShowHide = (swiper) => {
    const leftArrorBtn = swiper.navigation.prevEl;
    const rightArrorBtn = swiper.navigation.nextEl;

    swiper.on("activeIndexChange", () => {
      leftArrorBtn.style.display = swiper.activeIndex !== 0 ? "flex" : "none";

      const lastRightIndex =
        swiper.slides.length / swiper.params.grid.rows -
        swiper.params.slidesPerView;
      rightArrorBtn.style.display =
        swiper.activeIndex !== lastRightIndex ? "flex" : "none";
    });
  };

  arrowShowHide(portfolioSlider, 2);
  arrowShowHide(portfolioPopupSlider);

  document.getElementById("popup_portfolio_left").style.zIndex = "1";
  document.getElementById("popup_portfolio_left").style.display = "none";
  document.getElementById("popup_portfolio_right").style.zIndex = "1";
  document.getElementById("popup-portfolio-counter").style.zIndex = "1";
  document.getElementById("portfolio-counter").style.zIndex = "2";

  const portfolioSliderBlock = document.querySelector(".portfolio-slider");
  const portfolioPopupBlock = document.querySelector(".popup-portfolio");

  portfolioSliderBlock.addEventListener("click", (e) => {
    if (e.target.closest(".portfolio-slider__slide-frame")) {
      portfolioPopupBlock.style.visibility = "visible";
      blockBody();
    }
  });

  document.querySelector(".popup-portfolio").addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-dialog-portfolio") ||
      e.target.closest(".close")
    ) {
      portfolioPopupBlock.style.visibility = "hidden";
      unBlockBody();
    }
  });
};
