import {
  loadHeaderFooter
} from "./utils.mjs";

import { hideSearchButton } from "./utils.mjs";

loadHeaderFooter().then(() => {
    const searchBut = document.querySelector('#searchButtonContainer');
    hideSearchButton(searchBut);
    
  const heroContainerMain = document.querySelector('.heroContainer');
  heroContainerMain.querySelector('.heroText').innerHTML = `<h2>Submit a Recipe</h2>
            <p>Got a favorite recipe? Share it with the DishDash community! Fill in the form below and let the world taste your magic.</p>`;

  header.classList.add('headerSubmit');
});


  const links = document.querySelectorAll('.navigation a');
  const current = window.location.pathname;
  links.forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    console.log(linkPath);
    if (current === linkPath || (current === '/' && linkPath.endsWith('/index.html'))) {
      link.classList.add('active');
    }
  });
