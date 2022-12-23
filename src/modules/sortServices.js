import { render } from "./renderTable";
export const sortServices = () => {
  const tableHead = document.querySelector("thead");

  const idSortIcon = tableHead.querySelector(".th-id>span>.icon-sort");
  const typeSortIcon = tableHead.querySelector(".th-type>span>.icon-sort");
  const nameSortIcon = tableHead.querySelector(".th-name>span>.icon-sort");
  const unitsSortIcon = tableHead.querySelector(".th-units>span>.icon-sort");

  idSortIcon.style.display = "none";
  typeSortIcon.style.display = "none";
  nameSortIcon.style.display = "none";
  unitsSortIcon.style.display = "none";

  tableHead.addEventListener("click", (e) => {
    if (e.target.closest(".th-id")) {
      if (idSortIcon.style.display == "none") {
        hideOtherSortSelectors(idSortIcon);
        idSortIcon.style.display = "block";
        userServices
          .sortServices("?_sort=id&_order=asc")
          .then((data) => render(data));
      } else {
        if (idSortIcon.style.transform == "rotate(180deg)") {
          idSortIcon.style.transform = "";
          idSortIcon.style.display = "none";
          userServices.getServices().then((data) => render(data));
        } else {
          idSortIcon.style.transform = "rotate(180deg)";
          userServices
            .sortServices("?_sort=id&_order=desc")
            .then((data) => render(data));
        }
      }
    }

    if (e.target.closest(".th-type")) {
      if (typeSortIcon.style.display == "none") {
        hideOtherSortSelectors(typeSortIcon);
        typeSortIcon.style.display = "block";
        userServices
          .sortServices("?_sort=type&_order=asc")
          .then((data) => render(data));
      } else {
        if (typeSortIcon.style.transform == "rotate(180deg)") {
          typeSortIcon.style.transform = "";
          typeSortIcon.style.display = "none";
          userServices.getServices().then((data) => render(data));
        } else {
          typeSortIcon.style.transform = "rotate(180deg)";
          userServices
            .sortServices("?_sort=type&_order=desc")
            .then((data) => render(data));
        }
      }
    }

    if (e.target.closest(".th-name")) {
      if (nameSortIcon.style.display == "none") {
        hideOtherSortSelectors(nameSortIcon);
        nameSortIcon.style.display = "block";
        userServices
          .sortServices("?_sort=name&_order=asc")
          .then((data) => render(data));
      } else {
        if (nameSortIcon.style.transform == "rotate(180deg)") {
          nameSortIcon.style.transform = "";
          nameSortIcon.style.display = "none";
          userServices.getServices().then((data) => render(data));
        } else {
          nameSortIcon.style.transform = "rotate(180deg)";
          userServices
            .sortServices("?_sort=name&_order=desc")
            .then((data) => render(data));
        }
      }
    }

    if (e.target.closest(".th-units")) {
      if (unitsSortIcon.style.display == "none") {
        hideOtherSortSelectors(unitsSortIcon);
        unitsSortIcon.style.display = "block";
        userServices
          .sortServices("?_sort=units&_order=asc")
          .then((data) => render(data));
      } else {
        if (unitsSortIcon.style.transform == "rotate(180deg)") {
          unitsSortIcon.style.transform = "";
          unitsSortIcon.style.display = "none";
          userServices.getServices().then((data) => render(data));
        } else {
          unitsSortIcon.style.transform = "rotate(180deg)";
          userServices
            .sortServices("?_sort=units&_order=desc")
            .then((data) => render(data));
        }
      }
    }
  });

  const hideOtherSortSelectors = (selected) => {
    selected == idSortIcon
      ? null
      : ((idSortIcon.style.display = "none"),
        (idSortIcon.style.transform = ""));
    selected == typeSortIcon
      ? null
      : ((typeSortIcon.style.display = "none"),
        (typeSortIcon.style.transform = ""));
    selected == nameSortIcon
      ? null
      : ((nameSortIcon.style.display = "none"),
        (nameSortIcon.style.transform = ""));
    selected == unitsSortIcon
      ? null
      : ((unitsSortIcon.style.display = "none"),
        (unitsSortIcon.style.transform = ""));
  };
};
