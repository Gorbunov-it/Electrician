import scrollBy from "./scroolBy";

const up = () => {
  const buttonUp = document.querySelector(".up");
  const servicesLink = document.getElementById("services");

  buttonUp.addEventListener("click", (e) => {
    e.preventDefault();
    scrollBy(document.querySelector(".header-wrapper"));
  });

  const scrollUp = () => {
    if (window.scrollY >= servicesLink.offsetTop - 100) {
      showScrollUp();
    } else {
      hideScrollUp();
    }
  };

  const showScrollUp = () => {
    buttonUp.style.display = "block";
  };

  const hideScrollUp = () => {
    buttonUp.style.display = "none";
  };

  window.onscroll = scrollUp;

  const init = () => {
    scrollUp();
  };

  init();
};

export default up;
