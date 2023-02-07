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
  dictionary(value).then((value) => renderResult(value));
});

const audioTrigger = document.querySelector(".audio");
const audio = document.querySelector("audio");

audioTrigger.addEventListener("click", () => {
  audio.play();
});

/**/
const word = document.querySelector(".phonetica-text__word");
const subtitle = document.querySelector(".phonetica-text__subtitle");
const meaningHeading = document.querySelector(".meaning-header__text");
const meaning = document.querySelector(".meaning");
function renderResult(data) {
  meaning.innerHTML = "";
  const [object] = data;
  const [, phonetic] = object.phonetics;
  word.innerText = object.word;
  subtitle.innerText = phonetic.text;
  audio.src = phonetic.audio;
  console.log(phonetic.audio);

  object.meanings.forEach((e, index) => {
    meaning.insertAdjacentHTML(
      "beforeend",
      `
      <section class="meaning">
          <header class="meaning-header">
            <p class="meaning-header__text">${e.partOfSpeech}</p>
            <span class="line"></span>
          </header>
          <div class="meaning-content">
            <p>Meaning</p>
            <ul class="meaning-list-${index}">
            </ul>
          </div>
          <div class="meaning-synonymes-${index}">
            <p>Synonymes</p>
          </div>
        </section>
    `
    );
    const meaningList = document.querySelector(`.meaning-list-${index}`);
    const synonymeList = document.querySelector(`.meaning-synonymes-${index}`);
    e.definitions.forEach((e) => {
      meaningList.insertAdjacentHTML(
        "afterbegin",
        `
      <li class="meaning-list__ityem">
        ${e.definition}
      </li>
      `
      );
    });
    e.synonyms.forEach((e) => {
      console.log(e);
      synonymeList.insertAdjacentHTML(
        "beforeend",
        `
      <p class="synonym">${e}</p>
      `
      );
    });
  });
}
