export const menu = () => {
  // Second phone
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

  //Menu button
  const menuBtn = document.querySelector(".menu");
  const menuBlock = document.querySelector(".popup-menu");

  menuBtn.addEventListener("click", () => {
    menuBlock.style.visibility = "visible";
    menuBlock.children[0].style.right = "645px";
  });

  menuBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      !e.target.closest(".popup-dialog-menu") ||
      e.target.closest(".close-menu")
    ) {
      menuBlock.style.visibility = "hidden";
      menuBlock.children[0].style.right = "0px";
    }
  });
};
