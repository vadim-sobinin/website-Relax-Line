import { unBlockBody, blockBody } from "./helpers";
import { servecesList } from "./servecesList";

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

  menuBtn.addEventListener("click", (e) => {
    menuBlock.style.visibility = "visible";
    blockBody();

    if (innerWidth >= 576) {
      menuBlock.children[0].style.transform = "translate3d(0, 0, 0)";
    } else {
      console.log(menuBlock.children[0].scrollHeight);
      menuBlock.children[0].style.transform = "translate3d(0, 0vh, 0)";
      // menuBlock.children[0].clientHeight + "px";
    }
  });

  const hideMenu = () => {
    menuBlock.style.visibility = "hidden";
    if (innerWidth >= 576) {
      menuBlock.children[0].style.transform = "translate3d(645px, 0, 0)";
    } else {
      menuBlock.children[0].style.transform = "translate3d(0, -100vh, 0)";
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

    if (e.target.closest(".popup-menu-nav__item")) {
      console.log(e.target.closest(".popup-menu-nav__item").children[0].hash);
      const selectedSection = e.target.closest(".popup-menu-nav__item")
        .children[0].hash;
      document
        .querySelector(selectedSection)
        .scrollIntoView({ behavior: "smooth" });
      unBlockBody();
      hideMenu();
    }
  });

  document.querySelector(".button-footer").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#main").scrollIntoView({ behavior: "smooth" });
  });

  const menuLink = document.querySelector(".link-list-menu");

  const servisesList = document.querySelector(".popup-repair-types");

  menuLink.addEventListener("click", () => {
    hideMenu();
    servecesList(servisesList);
    servisesList.style.visibility = "visible";
  });

  const serviseLinkButton = document.querySelectorAll(".link-list-repair");

  serviseLinkButton.forEach((button) => {
    button.addEventListener("click", () => {
      blockBody();
      servecesList(servisesList);
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

  // popup-privacy

  const privacyLinks = document.querySelectorAll(".link-privacy");
  const privacyPopupBlock = document.querySelector(".popup-privacy");

  privacyLinks.forEach((link) => {
    link.addEventListener("click", () => {
      blockBody();
      privacyPopupBlock.style.visibility = "visible";
    });
  });

  const consultationPopupBlock = document.querySelector(".popup-consultation");

  privacyPopupBlock.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-dialog-privacy") ||
      e.target.closest(".close")
    ) {
      consultationPopupBlock.style.visibility == "visible"
        ? null
        : unBlockBody();
      privacyPopupBlock.style.visibility = "hidden";
    }
  });

  // popup-consultation

  const consultationBtns = document.querySelectorAll(".button_wide");

  consultationBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      blockBody();
      consultationPopupBlock.style.visibility = "visible";
    });
  });

  consultationPopupBlock.addEventListener("click", (e) => {
    if (!e.target.closest(".feedback-wrap") || e.target.closest(".close")) {
      unBlockBody();
      consultationPopupBlock.style.visibility = "hidden";
    }
  });
};
