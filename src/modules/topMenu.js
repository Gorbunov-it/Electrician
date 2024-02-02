import scrollBy from "./scroolBy";

const topMenu = () => {
  const menuBlock = document.querySelector(".top-menu");
  const menuLinks = menuBlock.querySelectorAll("ul>li>a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let href = link.getAttribute("href").substring(1);
      const block = document.getElementById(href);
      scrollBy(block, 100);
    });
  });
};

export default topMenu;
