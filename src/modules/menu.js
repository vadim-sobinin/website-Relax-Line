export const menu = () => {
  const arrow = document.querySelector(".header-contacts__arrow");
  const secondPhoneNumBlock = document.querySelector(
    ".header-contacts__phone-number-accord"
  );
  secondPhoneNumBlock.style.left = "-2px";

  arrow.addEventListener("click", () => {
    if (!arrow.dataset.status) {
      arrow.dataset.status = "clicked";
      secondPhoneNumBlock.style.top = "25px";
      secondPhoneNumBlock.children[0].style.opacity = "100";
      arrow.style.transform = "rotate(180deg)";
    } else {
      arrow.removeAttribute("data-status");
      arrow.style.transform = "rotate(0deg)";
      secondPhoneNumBlock.style.transitionDuration = "0";
      secondPhoneNumBlock.style.top = "0";
      secondPhoneNumBlock.children[0].style.opacity = "0";
    }
  });
};
