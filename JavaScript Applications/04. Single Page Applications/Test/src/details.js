export async function getAllRecipes(){
    const response = await fetch(`http://localhost:3030/data/recipes?select=` + encondeURIComponent('_id.name'));
    const recipes = await response.json();

    return recipes;
}