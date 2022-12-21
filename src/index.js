import { accordeon } from "./modules/accordeon";
import { formControl } from "./modules/formControl";
import { menu } from "./modules/menu";
import { phoneMask, nameValidator } from "./modules/phoneMask";
import { sliders } from "./modules/sliders";
import { portfolio } from "./modules/portfolio";

phoneMask(".feedback__input-input");
phoneMask(".feedback-block__form-input_phone");
nameValidator(".feedback-block__form-input_name");
formControl("#feedback1");
formControl("#feedback2");
formControl("#feedback3");
formControl("#feedback4");
formControl("#feedback5");
formControl("#feedback6");
menu();
accordeon();
sliders();
portfolio();
