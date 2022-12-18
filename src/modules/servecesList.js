import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Report } from "notiflix/build/notiflix-report-aio";

export const servecesList = (mainBlock) => {
  const typeListBlock = mainBlock.querySelector(".nav-list-popup-repair");

  const getTypes = async () => {
    let typesList = await [];
    await fetch("http://localhost:4545/data")
      .then((resp) => resp.json())
      .then((data) =>
        data.forEach((elem) =>
          !typesList.includes(elem.type) ? typesList.push(elem.type) : null
        )
      )
      .then(() =>
        typesList.forEach((elem, index) => {
          typeListBlock.insertAdjacentHTML(
            "beforeEnd",
            `
      <button class="button_o popup-repair-types-nav__item ${
        index == 0 ? "active" : ""
      }" value="${elem}">
      ${elem}
      </button>
      `
          );
        })
      );
  };

  const getSelectedInfo = (
    selectedCategory = "Потолок: Демонтажные работы"
  ) => {
    const categoryTitleBlock = mainBlock.querySelector("#switch-inner");
    const tableBody = mainBlock.querySelector(
      ".popup-repair-types-content-table__list"
    ).children[0];

    Loading.standard({
      zindex: 10000,
    });
    categoryTitleBlock.innerHTML = "";
    categoryTitleBlock.innerHTML = selectedCategory;
    tableBody.innerHTML = "";

    fetch(`http://localhost:4545/data?type=${selectedCategory}`)
      .then((res) => res.json())
      .then((data) =>
        data.forEach((elem) => {
          const newTr = document.createElement("tr");
          newTr.classList.add("mobile-row");
          newTr.dataset.type = elem.type;
          newTr.dataset.id = elem.id;
          newTr.innerHTML = `
        
          <td class="repair-types-name">${elem.name}</td>
          <td class="mobile-col-title tablet-hide desktop-hide">
            Ед.измерения
          </td>
          <td class="mobile-col-title tablet-hide desktop-hide">
            Цена за ед.
          </td>
          <td class="repair-types-value">${
            elem.units == "м2" ? "м<sup>2</sup>" : elem.units
          }</td>
          <td class="repair-types-value">${elem.cost} руб.</td>
                    
        `;
          tableBody.append(newTr);
        })
      )
      .then(() => Loading.remove())
      .catch((error) => {
        Loading.remove();
        Report.failure("Ошибка получения данных", error.message, "Okay", {
          zindex: 10000,
        });
      });
  };

  typeListBlock.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.closest(".button_o")) getSelectedInfo(e.target.value);
  });

  getTypes();
  getSelectedInfo();
};
