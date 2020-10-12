const demo = document.getElementById("demo");

demo.innerHTML = "Hello";
demo.textContent = "Hello world";
demo.textContent = "Hello world 3";

demo.className = "my-style";

const disappear = () => {
  demo.classList.add("hide");
};
const appear = () => {
  demo.classList.remove("hide");
};

const toggle = () => {
  demo.classList.toggle("hide");
};

demo.addEventListener("click", () => {
  demo.classList.toggle("red");
});
// demo.className = "hide";

// demo.style.fontSize = "4rem";
// demo.style.fontWeight = "bold";
// demo.style.color = "green";

// const tagName = document.getElementsByTagName("h1");
// const className = document.getElementsByClassName("first");
// const id = document.getElementById("demo-id");
// const qs = document.querySelector("#demo-id");
// const qsa = document.querySelectorAll("h1");

// console.log(tagName[2]);
// console.log(className[0]);
// console.log(id);

// console.log(qs);
