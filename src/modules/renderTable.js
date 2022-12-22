export const render = (data) => {
  const tableBody = document.getElementById("tbody");

  tableBody.innerHTML = "";

  data.forEach((elem) => {
    tableBody.insertAdjacentHTML(
      "beforeend",
      `
      <tr class="table__row">
      <td class="table__id table__cell">${elem.id}</td>
      <td class="table-type table__cell">
        ${elem.type}
      </td>
      <td class="table-name table__cell">
        ${elem.name}
      </td>
      <td class="table-units table__cell">${elem.units}</td>
      <td class="table-cost table__cell">${elem.cost} руб</td>
      <td>
        <div class="table__actions table__cell">
          <button class="button action-change">
            <span class="svg_ui"
              ><svg class="action-icon_change">
                <use
                  xlink:href="./img/sprite.svg#change"
                ></use></svg></span
            ><span>Изменить</span>
          </button>
          <button class="button action-remove">
            <span class="svg_ui"
              ><svg class="action-icon_remove">
                <use
                  xlink:href="./img/sprite.svg#remove"
                ></use></svg></span
            ><span>Удалить</span>
          </button>
        </div>
      </td>
    </tr>
    `
    );
  });
};
