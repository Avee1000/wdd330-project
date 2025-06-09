import {
  loadHeaderFooter
} from "./utils.mjs";

import { hideSearchButton } from "./utils.mjs";

loadHeaderFooter().then(() => {
  const images = [
    "../images/recipe1.webp",
    "../images/recipe3.webp",
    "../images/recipe4.webp"
  ];

  const searchBut = document.querySelector('#searchButtonContainer');
  hideSearchButton(searchBut);


  const randomIndex = Math.floor(Math.random() * images.length);
  const style = document.createElement('style');
  const header = document.querySelector('.homeHeader');
  console.log(header);
  header.classList.add('recipeHeader');
  style.innerHTML += `    
  #header::before {
    background-image: url('${images[randomIndex]}');
  }

`;
  header.appendChild(style);


  ////////////////////////////////////////////////////


  const searchBox = document.querySelector('#searchBoxContainer');
  searchBox.classList.add('recipeSearchBox');

  const heroContainerMain = document.querySelector('.heroContainer');
  heroContainerMain.classList.add('recipesPage');
  heroContainerMain.querySelector('.heroText').innerHTML = `<h2>Feeling hungry or curious?</h2>
<p>Explore our handpicked recipes—from quick breakfasts to indulgent desserts. Search by category or scroll to discover your next favorite dish.</p>`;
  heroContainerMain.querySelector('a').innerHTML = `Browse All Recipes`;
});
