import { render } from "./renderTable";
export const filterServices = () => {
  const typeSelector = document.querySelector("#typeItem");

  getTypes();

  typeSelector.addEventListener("change", () => {
    if (typeSelector.value == "Все") {
      userServices.getServices().then((data) => {
        render(data);
      });
    } else {
      const filterOpt = `?type=${typeSelector.value}`;

      userServices.filterServices(filterOpt).then((users) => render(users));
    }
  });
};

export const getTypes = async () => {
  const typeSelector = document.querySelector("#typeItem");
  typeSelector.innerHTML = '<option value=Все услуги">Все услуги</option>';
  let typesList = await [];
  await fetch("http://localhost:4545/data")
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((elem) =>
        !typesList.includes(elem.type) ? typesList.push(elem.type) : null
      )
    )
    .then(() =>
      typesList.forEach((elem) => {
        typeSelector.insertAdjacentHTML(
          "beforeEnd",
          `
          <option value="${elem}">
          ${elem}
        </option>
    `
        );
      })
    );
};
