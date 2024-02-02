const scrollBy = (element, top = 0) => {
  window.scroll({
    top: element.offsetTop - top,
    behavior: "smooth",
  });
};

export default scrollBy;
