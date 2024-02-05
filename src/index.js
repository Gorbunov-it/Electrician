import up from "./modules/up";
import menu from "./modules/topMenu";
import slider from "./modules/slider";
import accordion from "./modules/accordion";
import cardSlider from "./modules/cardSlider";
import openCloseModal from "./modules/openCloseModal";
import telRegExp from "./modules/telRegExp";
import nameRegExp from "./modules/nameRegExp";
import sendForm from "./modules/sendForm";

up();
menu();
slider();
accordion();
cardSlider();
openCloseModal();
telRegExp();
nameRegExp();
sendForm({
  formId: "callback",
  formName: "form-callback-modal",
});
