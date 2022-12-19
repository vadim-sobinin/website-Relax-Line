import Inputmask from "inputmask";

export const phoneMask = (inputSel) => {
  const inputs = document.querySelectorAll(inputSel);
  const mask = new Inputmask({
    mask: "(+7|8) (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: "tel",
  });
  inputs.forEach((input) => {
    mask.mask(input);
  });
};

const checkSpasesHyphens = (input) => {
  input = input.replace(/ {2,}/g, " ");
  input = input.replace(/-{2,}/g, "-");
  input = input.replace(/^ +| +$|( ) +/g, "$1");
  input = input.replace(/^-+|-+$/gm, "");
  return input;
};

export const nameValidator = (inputSelector) => {
  const inputs = document.querySelectorAll(inputSelector);

  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      let correctedInput = event.target.value.replace(
        /[^a-zA-Zа-яА-ЯËё\-\ ]/g,
        ""
      );

      if (correctedInput != "") {
        correctedInput = correctedInput.replace(
          /( |^)[a-zA-Zа-яА-ЯËё]/g,
          function (letter) {
            return letter.toUpperCase();
          }
        );

        let newCorrectedInput = correctedInput.split(" ").map((word) => {
          return word
            .split("")
            .reduce((total, letter) => total + letter.toLowerCase());
        });

        event.target.value = newCorrectedInput.join(" ");
      } else {
        event.target.value = "";
      }
    });
    input.addEventListener("blur", (event) => {
      event.target.value = checkSpasesHyphens(event.target.value);
    });
  });
};
