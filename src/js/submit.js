import { loadHeaderFooter, activeLinks, hideSearchButton } from "./utils.mjs";

loadHeaderFooter().then(() => {
  const searchBut = document.querySelector("#searchButtonContainer");
  hideSearchButton(searchBut);

  const heroContainerMain = document.querySelector(".heroContainer");
  heroContainerMain.querySelector(".heroText").innerHTML =
    `<h2>Submit a Recipe</h2>`;

  const header = document.querySelector("header");
  header.classList.add("headerSubmit");
  console.log(header);

  activeLinks();
});
