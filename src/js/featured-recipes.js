import RecipeData from './RecipeData.mjs';

async function displayRandomRecipes() {
    const data = new RecipeData();
    const recipes = await data.getData();

    const recipeList = [];

    const set = new Set();

    const recipeCard = document.querySelectorAll('.recipe-card');

    recipes.forEach((r) => {
        recipeList.push(r);
    })

    while (set.size < 3) {
        const ranNum = Math.floor(Math.random() * recipeList.length);
        set.add(ranNum);
    }

    const randomRecipes = Array.from(set).map(index => recipeList[index]);
    console.log(randomRecipes);

    randomRecipes.forEach((recipe, index) => {
        const card = recipeCard[index];

        const recipeImageContainer = card.querySelector('.imgContainer');
        const recipeImage = document.createElement('img');
        recipeImage.className = 'imgContainer';
        recipeImage.setAttribute('src', recipe.image);
        recipeImage.setAttribute('alt', recipe.name);
        recipeImage.setAttribute('height', 300);
        recipeImage.setAttribute('width', 200);    
        recipeImage.setAttribute('loading', 'lazy');
        recipeImageContainer.appendChild(recipeImage);

        const recipeInfo = card.querySelector('.recipe-card .recipes');
        recipeInfo.innerHTML += `
            <h3>${recipe.name}</h3>
            <p class="mealType">${recipe.mealType}</p>
            <p>Prep Time: ${recipe.prepTimeMinutes}</p>
            <p>Cooking Time: ${recipe.cookTimeMinutes} minutes</p>
            <p>Servings: ${recipe.servings}</p>
            <p>Ratings: ${recipe.rating}</p>
        `;

        card.querySelector('.imgContainer').addEventListener('mouseenter', function () {
            recipeImage.style.transform = "scale(1.1)";
            recipeImage.style.transition = "transform 0.7s ease-in-out";
        });
        card.querySelector('.imgContainer').addEventListener('mouseleave', function () {
            recipeImage.style.transform = "";
            recipeImage.style.transition = "transform 0.7s ease-in-out";
        });

        card.querySelector('.view-recipe-btn').addEventListener('click', (e) => {
            e.preventDefault();
            showModal(recipe);
        });

    });
}

if (document.querySelector('.recipe-card')) {
    displayRandomRecipes();
}