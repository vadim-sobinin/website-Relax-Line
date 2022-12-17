import { unBlockBody, blockBody } from "./helpers";

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
    blockBody();

    if (innerWidth >= 576) {
      menuBlock.children[0].style.right =
        menuBlock.children[0].clientWidth + "px";
    } else {
      menuBlock.children[0].style.top =
        menuBlock.children[0].clientHeight + "px";
    }
  });

  const hideMenu = () => {
    menuBlock.style.visibility = "hidden";
    if (innerWidth >= 576) {
      menuBlock.children[0].style.right = "0px";
    } else {
      menuBlock.children[0].style.top = "0px";
    }
  };

  menuBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      !e.target.closest(".popup-dialog-menu") ||
      e.target.closest(".close-menu")
    ) {
      unBlockBody();
      hideMenu();
    }
  });

  const menuLink = document.querySelector(".link-list-menu");

  const servisesList = document.querySelector(".popup-repair-types");

  menuLink.addEventListener("click", () => {
    hideMenu();
    servisesList.style.visibility = "visible";
  });

  const serviseLinkButton = document.querySelectorAll(".link-list-repair");

  serviseLinkButton.forEach((button) => {
    button.addEventListener("click", () => {
      blockBody();
      servisesList.style.visibility = "visible";
    });
  });

  const repairTypesList = document.querySelector(".nav-list-popup-repair");
  repairTypesList.style.transition = "none";

  servisesList.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-dialog-repair-types") ||
      e.target.closest(".close")
    ) {
      unBlockBody();
      servisesList.style.visibility = "hidden";
    }
  });
};
