import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter().then(() => {
const images = [
    "../images/food45.webp",
    "../images/food5.webp",
    "../images/food6.webp",
    "../images/food8.webp"
];

const randomIndex = Math.floor(Math.random() * images.length);
const style = document.createElement('style');
const header = document.querySelector('header');
header.classList.add('homeHeader');
style.innerHTML += `
  #header::before {
    background-image: url('${images[randomIndex]}');
  }
`;
  header.appendChild(style);
  
   function loadHeaderDetails(element) {
    const elementVar = element.querySelector('.heroContainer');
    elementVar.querySelector('.heroText').innerHTML = `<h2>Discover, Cook, and Share Your Favorite Recipes</h2>
    <p>Find your next favorite dish today!</p>`;
  }

  loadHeaderDetails(document.querySelector('#partialHeader'))

})


