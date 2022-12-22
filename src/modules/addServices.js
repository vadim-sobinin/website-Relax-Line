import { unBlockBody, blockBody } from "./helpers";
import { render } from "./renderTable";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const addServices = () => {
  const addBtn = document.querySelector(".btn-addItem");
  const modal = document.getElementById("modal");
  const form = modal.querySelector("form");

  addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    blockBody();
    form.dataset.action = "add";
  });

  modal.addEventListener("click", (e) => {
    if (
      e.target.closest(".button__close") ||
      !e.target.closest(".modal") ||
      e.target.closest(".cancel-button")
    ) {
      modal.style.display = "none";
      unBlockBody();
      form.reset();
      delete form.dataset.action;
    }
  });

  const isInputFill = (elementSelector) => {
    const input = form.querySelector(elementSelector);
    if (input.value.length == 0) {
      input.style.borderBottomColor = "red";
      return false;
    } else {
      input.style.borderBottomColor = "#c8c5d1";
      return true;
    }
  };

  form.querySelector(".cancel-button").disabled = true;
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.dataset.action != "add") {
      return;
    }

    if (isNaN(form.querySelector(".input__cost").value)) {
      Notify.failure('В поле "цена" можно вводить только цифры!');
      return;
    }

    if (
      isInputFill(".input__type") &&
      isInputFill(".input__name") &&
      isInputFill(".input__units") &&
      isInputFill(".input__cost")
    ) {
      const dataObj = {
        name: form.querySelector(".input__name").value,
        type: form.querySelector(".input__type").value,
        units: form.querySelector(".input__units").value,
        cost: +form.querySelector(".input__cost").value,
      };

      userServices
        .addServices(dataObj)
        .then(() => userServices.getServices())
        .then((data) => render(data))
        .then(() => {
          form.reset;
          modal.style.display = "none";
          unBlockBody();
          delete form.dataset.action;
        });
    }
  });
};
