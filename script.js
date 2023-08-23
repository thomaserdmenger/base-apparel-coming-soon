const form = document.querySelector("form");
const input = document.querySelector(".form-input");

const errorMessage = document.querySelector(".input-error-message");
const errorImage = document.querySelector(".input-error-image");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = input.value;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!userInput.match(mailFormat)) {
    input.classList.add("error-input");
    errorImage.classList.add("error-show");
    errorMessage.classList.add("error-show");
  } else {
    input.classList.remove("error-input");
    errorImage.classList.remove("error-show");
    errorMessage.classList.remove("error-show");
  }
});
