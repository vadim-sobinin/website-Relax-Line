import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";
import isMobilePhone from "validator/es/lib/isMobilePhone";

export const formControl = (formSelector) => {
  const form = document.querySelector(formSelector);
  // const submitBtn = form.querySelector("button");
  const checkBox = form.querySelector("input[type='checkbox']");
  const phoneInput = form.querySelector("input[name='phone']");

  checkBox.required ? checkBox.removeAttribute("required") : null;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!checkBox.checked) {
      Notify.failure("Необходимо согласиться с политикой конфеденциальности!", {
        zindex: 10000,
      });
      return;
    }

    if (!isMobilePhone(phoneInput.value.replace(/\D/g, ""), ["ru-RU"])) {
      Notify.failure("Проверьте правильность введённого номера!", {
        zindex: 10000,
      });
      return;
    }

    submitForm(form);
  });

  const sendData = (data) => {
    return fetch("http://localhost:4545/feedback_requests", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    }).then((response) => response.json());
  };

  const submitForm = (form) => {
    const formData = new FormData(form);
    const dataObj = {};

    Loading.standard({
      zindex: 10001,
    });

    formData.forEach((val, key) => {
      val = key == "phone" ? +val.replace(/\D/g, "") : val;
      dataObj[key] = val;
    });

    const date = new Date();
    dataObj["time"] = date.toLocaleTimeString();
    dataObj["date"] = date.toLocaleDateString();

    sendData(dataObj)
      .then((data) => {
        Loading.remove();

        const thankYouPopup = document.querySelector(".popup-thank");
        thankYouPopup.style.visibility = "visible";
        thankYouPopup.addEventListener("click", (e) => {
          if (
            !e.target.closest(".popup-thank-bg") ||
            e.target.closest(".close")
          ) {
            thankYouPopup.style.visibility = "hidden";
          }
        });
      })

      .catch((err) => {
        Loading.remove();
        Report.failure(
          "Ошибка в отправке запроса!",
          "Пожалуйста, свяжитесь с нами по нашим контактным телефонам.",
          "Хорошо",
          {
            zindex: 10000,
          }
        );
      });
  };
};
