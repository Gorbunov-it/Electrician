const telRegExp = () => {
  const userPhones = document.getElementsByName("tel");
  const regExp = /(\+7|8)(\d{3})(\d{3})(\d{2})(\d{2})/g;

  const isUserPhonelValid = (phone) => {
    return regExp.test(phone);
  };

  const phoneInputEvent = () => {
    userPhones.forEach((userPhone) => {
      userPhone.addEventListener("input", (e) => {
        e.preventDefault();
        if (isUserPhonelValid(userPhone.value)) {
          userPhone.classList.add("success");
        } else {
          userPhone.classList.remove("success");
        }
      });
    });
  };

  phoneInputEvent();
};

export default telRegExp;
