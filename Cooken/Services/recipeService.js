const baseUrl = process.env.baseURL;

function getRandomRecipe() {
  return fetch(`${baseUrl}/recipe/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

const getRecipeByCuisine = (cuisineTag, difficulty) => {
  return fetch(`${baseUrl}/recipe/:cuisineTag/:difficulty`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((e) => e)
}

export const  recipeServices = {
  getRandomRecipe,
  getRecipeByCuisine,
};