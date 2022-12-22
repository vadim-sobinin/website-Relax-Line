export const blockBody = () => {
  const body = document.body;
  body.style.overflow = "hidden";
  const bodyScroll = calcScroll();
  body.style.marginRight = `${bodyScroll}px`;
};

export const unBlockBody = () => {
  const body = document.body;
  body.style.overflow = "auto";
  body.style.marginRight = `0`;
};

export const calcScroll = () => {
  let div = document.createElement("div");
  div.style.width = "500px";
  div.style.height = "500px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

export const animate = ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // вычисление текущего состояния анимации
    let progress = timing(timeFraction);

    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export const debounce = (func, ms = 300) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      {
        func.apply(this, args);
      }
    }, ms);
  };
};

export const arrowShowHide = (swiper) => {
  const leftArrorBtn = swiper.navigation.prevEl;
  const rightArrorBtn = swiper.navigation.nextEl;

  leftArrorBtn.style.display = "none";

  swiper.on("activeIndexChange", () => {
    if (swiper.slides.length !== swiper.params.slidesPerView) {
      leftArrorBtn.style.display = swiper.activeIndex !== 0 ? "flex" : "none";

      const lastRightIndex =
        swiper.slides.length / swiper.params.grid.rows -
        swiper.params.slidesPerView;
      rightArrorBtn.style.display =
        swiper.activeIndex !== lastRightIndex ? "flex" : "none";
    }
  });
};
