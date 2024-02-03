const accordion = () => {
  const accordeon = document.querySelector(".accordeon");
  const accordeonItems = accordeon.querySelectorAll(".element");

  accordeonItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      selectItem(index);
    });
  });

  const selectItem = (index) => {
    for (let i = 0; i < accordeonItems.length; i++) {
      if (i === index) {
        accordeonItems[i].classList.add("active");
        accordeonItems[i].querySelector(".element-content").style.display = "block";
      } else {
        accordeonItems[i].classList.remove("active");
        accordeonItems[i].querySelector(".element-content").style.display = "none";
      }
    }
  };
};

export default accordion;
