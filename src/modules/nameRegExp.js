const nameRegExp = () => {
  const userName = document.getElementsByName("fio");
  const regExp = /^[а-яА-ЯёЁ]{2,}$/;

  const isUserNameValid = (userName) => {
    return regExp.test(userName);
  };

  const nameInputEvent = () => {
    userName.forEach((input) => {
      input.addEventListener("input", (e) => {
        e.preventDefault();
        if (isUserNameValid(input.value)) {
          input.classList.add("success");
        } else {
          input.classList.remove("success");
        }
      });
    });
  };

  nameInputEvent();
};

export default nameRegExp;
