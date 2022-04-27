//needs to be fetch('http://localIPaddress:PORT/endpoint')

function getRandomRecipe() {
  return fetch(`/recipe/`)
    .then((res) => res.json())
    .then((data) => data.res)
    // .then(() => console.log('this is service',data.res))
    .catch((e) => e);
}
// send difficulty as "any" when called
const getRecipeByCuisine = (cuisineTag, difficulty) => {
  return fetch(`/recipe/${cuisineTag}/${difficulty}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((e) => e)
}

export const recipeServices = {
  getRandomRecipe,
  getRecipeByCuisine,
};