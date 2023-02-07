import { dictionary } from "./helpers/helper";

const html = document.querySelector("html");
const toggler = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
const fontOptions = document.querySelectorAll(".option");
const fontButton = document.querySelector(".font");
const form = document.querySelector("form");

toggler.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("dark");
  if (html.classList.contains("light-mode")) {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode");
  } else {
    html.classList.remove("dark-mode");
    html.classList.add("light-mode");
  }
});

fontOptions.forEach((e) => {
  e.addEventListener("click", (e) => {
    const value = e.target.dataset.value;
    fontButton.innerText = value;
    if (body.classList.contains(value)) {
    } else {
      body.classList = "";
      body.classList.add(value);
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = form.search.value;
  console.log(value);
  const data = dictionary(value).then();
});