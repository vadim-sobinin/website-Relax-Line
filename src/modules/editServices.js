import { unBlockBody, blockBody } from "./helpers";
import { render } from "./renderTable";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const editServices = () => {
  const modal = document.getElementById("modal");
  const form = modal.querySelector("form");
  const tableBody = document.getElementById("tbody");
  let selectedId;

  modal.addEventListener("click", (e) => {
    if (
      e.target.closest(".button__close") ||
      !e.target.closest(".modal") ||
      e.target.closest(".cancel-button")
    ) {
      modal.style.display = "none";
      modal.querySelector(".modal__header").textContent =
        "Добавление новой услуги";
      unBlockBody();
      form.reset();
      delete form.dataset.action;
    }
  });

  tableBody.addEventListener("click", (e) => {
    if (e.target.closest(".action-change")) {
      const selectedRow = e.target.closest(".table__row").children;

      selectedId = selectedRow[0].textContent;
      form.querySelector("#type").value = selectedRow[1].textContent.trim();
      form.querySelector("#name").value = selectedRow[2].textContent.trim();
      form.querySelector("#units").value = selectedRow[3].textContent.trim();
      form.querySelector("#cost").value =
        selectedRow[4].textContent.split(" ")[0];

      modal.querySelector(".modal__header").textContent =
        "Редактировать услугу";
      modal.style.display = "flex";
      blockBody();
      form.dataset.action = "edit";
      form.querySelector(".cancel-button").disabled = true;
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

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (form.dataset.action != "edit") {
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
      form.reset();

      userServices
        .editService(selectedId, dataObj)
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
