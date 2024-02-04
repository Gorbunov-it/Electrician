import { animate } from "./animate";

const openCloseModal = () => {
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.querySelector(".modal-callback");

  const servicesSection = document.querySelector(".services-elements");
  const links = servicesSection.querySelectorAll(".element");
  const body = document.querySelector("body");

  const aminatedModal = (toggle, opacity) => {
    modalCallback.style.opacity = opacity;
    animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        if (toggle === "block") {
          modalCallback.style.display = toggle;
          modalCallback.style.opacity = opacity + progress;
          modalOverlay.style.display = toggle;
        } else {
          modalCallback.style.opacity = opacity - progress;
          if (modalCallback.style.opacity <= 0) {
            modalCallback.style.display = toggle;
            modalOverlay.style.display = toggle;
          }
        }
      },
    });
  };

  const eventAminatedModal = (toggle) => {
    toggle === "block" ? aminatedModal(toggle, 0) : aminatedModal(toggle, 1);
  };

  const eventNoAminatedModal = (toggle) => {
    modalCallback.style.display = toggle;
    toggle === "block" ? (modalCallback.style.opacity = 1) : (modalCallback.style.opacity = 0);
  };

  const eventModal = (toggle) => {
    window.outerWidth >= 768 ? eventAminatedModal(toggle) : eventNoAminatedModal(toggle);
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      eventModal("block");
    });
  });

  body.addEventListener("click", (e) => {
    if (e.target.closest(".modal-overlay") || e.target.closest(".modal-close > img")) {
      eventModal("none");
    } else if (e.target.closest(".callback-btn") || e.target.closest(".button-services")) {
      eventModal("block");
    }
  });
};

export default openCloseModal;
