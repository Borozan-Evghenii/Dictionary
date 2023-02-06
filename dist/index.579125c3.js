const html = document.querySelector("html");
const toggler = document.querySelector(".theme-toggle");
const body = document.querySelector("body");
toggler.addEventListener("click", (e)=>{
    e.currentTarget.classList.toggle("dark");
    if (html.classList.contains("light-mode")) {
        html.classList.remove("light-mode");
        html.classList.add("dark-mode");
    } else {
        html.classList.remove("dark-mode");
        html.classList.add("light-mode");
    }
});
const fontOptions = document.querySelectorAll(".option");
const fontButton = document.querySelector(".font");
fontOptions.forEach((e)=>{
    e.addEventListener("click", (e)=>{
        const value = e.target.dataset.value;
        fontButton.innerText = value;
        if (body.classList.contains(value)) ;
        else {
            body.classList = "";
            body.classList.add(value);
        }
    });
});

//# sourceMappingURL=index.579125c3.js.map
