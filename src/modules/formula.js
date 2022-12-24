export const formula = () => {
  const formulaSection = document.getElementById("formula");
  formulaSection.addEventListener("mouseover", (e) => {
    if (e.target.closest(".formula-item__icon")) {
      e.preventDefault();
      const popupTopOffset = e.target
        .closest(".formula-item__icon")
        .children[0].getBoundingClientRect().top;
      const item = e.target.closest(".formula-item");
      const popup = item.querySelector(".formula-item-popup");

      item.classList.add("active-item");

      if (popupTopOffset < 0) {
        item.children[1].style.visibility = "hidden";
        popup.style.setProperty("--transform", "rotate(180deg)");
        popup.style.bottom = `-${popup.clientHeight}px`;
      }
    }
  });

  formulaSection.addEventListener("mouseout", (e) => {
    if (e.target.closest(".formula-item__icon")) {
      e.preventDefault();
      const item = e.target.closest(".formula-item");
      item.classList.remove("active-item");
      item.children[1].style.visibility = "visible";
      const popup = item.querySelector(".formula-item-popup");
      popup.style.setProperty("--transform", "rotate(0deg)");
      popup.style.bottom = "90px";
    }
  });
};
