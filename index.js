const html = document.querySelector("html");
const toggler = document.querySelector(".theme-toggle");

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
