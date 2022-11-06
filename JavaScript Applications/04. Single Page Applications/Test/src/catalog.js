export async function getAllRecipes(){
    const response = await fetch(`http://localhost:3030/data/recipes?select=` + encondeURIComponent('_id.name'));
    const recipes = await response.json();

    return recipes;
}

export function displayRecipes(recipes){
    const cards = recipes.map(createRecipeCard);

    const fragment = document.createDocumentFragment();
    for(let item of cards){
        fragment.appendChild(item);
    }

    const list = document.getElementById('recipe-list');
    list.replaceChildren(fragment);
}

function createRecipeCard(recipe){
    const element = document.createElement('li');
    element.textContent = recipe.name;

    return element;
}