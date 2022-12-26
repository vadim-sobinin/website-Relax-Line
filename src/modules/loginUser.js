import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

export const loginUser = (sessionDuration) => {
  const usernameInput = document.getElementById("name");
  const passwordInput = document.getElementById("type");
  const submitBtn = document.querySelector(".button-ui_firm");
  const form = document.querySelector("form");
  const usernameWarning = document.getElementById("username-warning");
  const passwordWarning = document.getElementById("password-warning");

  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "#A9A9A9";
  submitBtn.style.borderColor = "#A9A9A9";

  const backToSiteBtn = document.querySelector(".back-to-site");
  backToSiteBtn.addEventListener("click", () =>
    window.location.replace("http://localhost:8080/")
  );

  form.addEventListener("input", () => {
    if (usernameInput.value.length != 0 && passwordInput.value.length != 0) {
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = "#055841";
      submitBtn.style.borderColor = "#055841";
    } else {
      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = "#A9A9A9";
      submitBtn.style.borderColor = "#A9A9A9";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userData = {};
    userData[usernameInput.value] = passwordInput.value;
    let isUserValid = false;
    Loading.standard();
    userServices
      .getUsers()
      .then((data) => {
        data.forEach((user) => {
          Loading.remove();
          if (user.username == usernameInput.value) {
            isUserValid = true;
            usernameWarning.style.opacity = 0;
            if (user.password == passwordInput.value) {
              passwordWarning.style.opacity = 0;
              console.log("Succsessful");
              submitBtn.disabled = true;
              submitBtn.style.backgroundColor = "#A9A9A9";
              submitBtn.style.borderColor = "#A9A9A9";
              form.reset();
              document.cookie = `username=${user.username}; max-age=${sessionDuration}`;
              window.location.replace("http://localhost:8080/admin/table.html");

              return;
            } else {
              passwordWarning.style.opacity = 100;
              return;
            }
          }
        });
        isUserValid ? null : (usernameWarning.style.opacity = 100);
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
    // submitForm(form);
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
          "Проверьте наличие связи с базой данных!",
          "Хорошо",
          {
            zindex: 10000,
          }
        );
      });
  };
};
