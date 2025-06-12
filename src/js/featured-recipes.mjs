import RecipeData from './RecipeData.mjs';

export function showModal(recipe) {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('class', 'modal');

    const ingredientsContainer = document.createElement('div');
    ingredientsContainer.className = 'ingredientsContainer';
    const ingredientsHeader = document.createElement('h3');
    ingredientsHeader.textContent = 'Ingredients';
    const ingredients = document.createElement('ul');
    recipe.ingredients.forEach((ingredient) => {
        const listOfIngredient = document.createElement('li');
        listOfIngredient.textContent = ingredient;
        ingredients.appendChild(listOfIngredient);
    })
    ingredientsContainer.append(ingredientsHeader, ingredients);

    
    const instContainer = document.createElement('div');
    instContainer.className = 'instructionsContainer';
    const instHeader = document.createElement('h3');
    instHeader.textContent = 'Instructions';
    const instructions = document.createElement('ul');
    recipe.instructions.forEach((instruction, index) => {
        instructions.innerHTML += `<li><span>Step ${index + 1}</span>${instruction}`;
    })
    instContainer.append(instHeader, instructions);


    dialog.append(ingredientsContainer, instContainer);

    // Append the modal to the body
    document.body.appendChild(dialog);

    // Show the modal
    document.body.style.overflow = "hidden";
    dialog.showModal();

    dialog.scrollTop = 0;


    // Close the modal when the close button is clicked
    // const closeButton = dialog.querySelector('.close-button');
    // closeButton.addEventListener('click', () => {
    //     dialog.close();
    //     dialog.remove();
    // });

    // Close the modal when clicking outside the modal content
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.classList.add('closing'); // Add the closing animation class
            setTimeout(() => {
                dialog.close();
                dialog.remove();
            }, 200); 
            document.body.style.overflow = "";
        }
    });
} 

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