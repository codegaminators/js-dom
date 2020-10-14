const users = [
  {
    id: "6caaeede-a463-4ca4-812b-27cdd408b2e5",
    first_name: "Vita",
    last_name: "Klageman",
    email: "vklageman1i@digg.com",
    gender: "Female",
    password: "password1",
    username: "user1",
  },
  {
    id: "bec7124d-6822-414d-ae52-491ec9e8ecc6",
    first_name: "Keriann",
    last_name: "Di Francecshi",
    email: "kdifrancecshi1j@edublogs.org",
    gender: "Female",
    password: "password2",
    username: "user2",
  },
  {
    id: "fb2a1d52-d3e6-442c-b808-533ce2f50ecd",
    first_name: "Ramsay",
    last_name: "Chappell",
    email: "rchappell1k@icio.us",
    gender: "Male",
    password: "password3",
    username: "user3",
  },
];
const form = document.querySelector("#myform");
const toggler = document.querySelector(".toggler");
const h3 = document.createElement("h3");
const ul = document.createElement("ul");
const li = document.createElement("li");
const bio = document.querySelector("#bio");

toggler.addEventListener("click", () => {
  const mobileNav = document.querySelector(".mobile-nav");
  mobileNav.classList.toggle("d-none");
});

form.addEventListener("submit", (event) => {
  const username = document.getElementsByName("username")[0];
  const password = document.getElementsByName("password")[0];
  event.preventDefault();
  const data = users.find(
    (user) =>
      user.username === username.value && user.password === password.value
  );
  if (data) {
    alert(`Welcome ${data.first_name} ${data.last_name}`);
    handleSuccess(data);
  } else alert("Username or password is not correct");
});

function handleSuccess(info) {
  h3.textContent = `Welcome ${info.first_name}`;

  li.textContent = `Name: ${info.first_name} ${info.last_name}`;

  bio.appendChild(h3);
  bio.appendChild(li);
  form.className = "d-none";
}
