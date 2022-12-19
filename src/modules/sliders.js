// import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper from "swiper/bundle";
// import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/bundle";

// import Swiper from "swiper";

export const sliders = () => {
  const reviewSwiper = new Swiper(".reviews-slider", {
    loop: true,

    navigation: {
      nextEl: "#reviews-arrow_right",
      prevEl: "#reviews-arrow_left",
    },
  });
  const repairSliders = document.querySelector(".repair-types-slider").children;
  const repairNavList = document.querySelector(".nav-list-repair");
  const navButtons = repairNavList.querySelectorAll(".repair-types-nav__item");

  document.getElementById("repair-counter").style.zIndex = "10";
  const createSlider = (selector) => {
    return new Swiper(selector, {
      navigation: {
        nextEl: "#repair-types-arrow_right",
        prevEl: "#repair-types-arrow_left",
      },
      pagination: {
        el: "#repair-counter",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return `<div class="slider-counter-content">
          <div class="slider-counter-content__current ${currentClass}"></div>
          <div class="slider-counter-content__total ${totalClass}"></div>
        </div>`;
        },
      },
    });
  };

  const sliderArray = [
    createSlider(".types-repair1"),
    createSlider(".types-repair2"),
    createSlider(".types-repair3"),
    createSlider(".types-repair4"),
    createSlider(".types-repair5"),
  ];

  repairNavList.addEventListener("click", (e) => {
    if (e.target.closest(".repair-types-nav__item")) {
      navButtons.forEach((btn) => {
        btn.classList.contains("active")
          ? btn.classList.remove("active")
          : null;
      });

      const selectedItemNumber = e.target
        .closest(".repair-types-nav__item")
        .classList[2].split("-")[3];

      e.target.closest(".repair-types-nav__item").classList.add("active");

      sliderArray.forEach((slider, index) => {
        slider.disable();
        repairSliders[index].style.display = "none";
      });
      sliderArray[selectedItemNumber - 1].enable();
      sliderArray[selectedItemNumber - 1].pagination.update();
      repairSliders[selectedItemNumber - 1].style.display = "block";
    }
  });
};
