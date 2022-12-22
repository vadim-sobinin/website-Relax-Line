import { render } from "./renderTable";
export const removeService = () => {
  const tableBody = document.getElementById("tbody");

  tableBody.addEventListener("click", (e) => {
    if (e.target.closest(".action-remove")) {
      const serviceId = e.target.closest(".table__row").children[0].textContent;

      userServices
        .removeService(serviceId)
        .then(() => userServices.getServices())
        .then((data) => render(data));
    }
  });
};
