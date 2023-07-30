const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const form = document.querySelector("#form");

passwordCheck.addEventListener("input", (e) => {
  console.log(password.value);
  console.log(passwordCheck.value);
  if (password.value == passwordCheck.value) {
    password.classList.remove("invalid");
    password.classList.add("valid");
    passwordCheck.classList.remove("invalid");
    passwordCheck.classList.add("valid");
  } else {
    password.classList.add("invalid");
    passwordCheck.classList.add("invalid");
    password.classList.remove("valid");
    passwordCheck.classList.remove("valid");
  }
});
password.addEventListener("input", (e) => {
  console.log(password.value);
  console.log(passwordCheck.value);
  if (password.value == passwordCheck.value) {
    password.classList.remove("invalid");
    password.classList.add("valid");
    passwordCheck.classList.remove("invalid");
    passwordCheck.classList.add("valid");
  } else {
    password.classList.add("invalid");
    passwordCheck.classList.add("invalid");
    password.classList.remove("valid");
    passwordCheck.classList.remove("valid");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (passwordCheck.classList.contains("invalid")) {
    alert("Password Doesn't match");
  } else {
    form.submit();
  }
});
