// JS DOM

const demo = document.getElementById("demo");
const list = document.querySelectorAll("li");
const first = document.querySelector(".first");

const anything = () => {
  first.classList.toggle("hide");
};

list.forEach((li) => {
  li.children[0].addEventListener("click", () => {
    li.style.display = "none";
  });
});

// const h1 = document.querySelector(".first");

// const btn = document.createElement("button");
// btn.textContent = "Click me";

// demo.appendChild(btn);

// btn.addEventListener("click", () => {
//   h1.style.color = "red";
// });
// demo.innerHTML = "Hello world";
// demo.textContent = "Hello world 3";

// // demo.style.fontSize = "4rem";

// demo.className = "my-style";

// const add = () => {
//   demo.classList.add("upper");
// };
// const remove = () => {
//   demo.classList.remove("upper");
// };

// const toggle = () => {
//   demo.classList.toggle("hide");
// };

// demo.addEventListener("mouseenter", () => {
//   demo.classList.toggle("my-color");
// });

// demo.classList.add("upper");
// demo.classList.remove("my-style");
// console.log(demo);

// demo.style.height = "100px";
// demo.style.width = "30%";
// demo.style.backgroundColor = "red";

// const tagName = document.getElementsByTagName("p");
// const className = document.getElementsByClassName("second");
// const id = document.getElementById("demo-id");

// const qs = document.querySelector("h1");
// const qsa = document.querySelectorAll("h1");
