const mobileWrapper = document.querySelector(".mobile-wrapper");
const toggler = document.querySelector(".toggler");
const form = document.querySelector("#form");
let checkValue = false;
const users = [];

const check = document.getElementsByName("check")[0];
check.addEventListener("change", (e) => {
  checkValue = !checkValue;
  console.log(checkValue);
});

toggler.addEventListener("click", () => {
  mobileWrapper.classList.toggle("show");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementsByName("name")[0].value;
  let username = document.getElementsByName("username")[0].value;
  let email = document.getElementsByName("email")[0].value;
  let password = document.getElementsByName("password")[0].value;
  let password2 = document.getElementsByName("password2")[0].value;

  if (password !== password2) {
    return alert("Passwords don't match");
  }
  users.push({ name, username, email, password });
  console.log(users);
  alert("SUCCESS !");
});
