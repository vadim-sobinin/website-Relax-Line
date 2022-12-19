export const accordeon = () => {
  const accordeonBlock = document.querySelector(".accordion");
  const elems = accordeonBlock.querySelectorAll(".title_block");

  accordeonBlock.style.overflow = "visible";

  accordeonBlock.addEventListener("click", (e) => {
    if (e.target.closest(".title_block")) {
      const selectedElem = e.target.closest(".title_block");

      elems.forEach((elem) => {
        if (elem.classList.contains("msg-active")) {
          elem.classList.remove("msg-active");
        }
      });

      selectedElem.classList.add("msg-active");
      setTimeout(() => {
        selectedElem.scrollIntoView({ behavior: "smooth" });
      }, 550);
    }
  });
};
