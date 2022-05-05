//needs to be fetch('http://localIPaddress:PORT/endpoint')

function getRandomRecipe() {
  return fetch(`http://192.168.5.7:3001/recipe/`)
    .then((res) => res.json())
    .then((data) => data.res)
    .catch((error) => console.log(error));
}
// send difficulty as "any" when called
const getRecipeByCuisine = (cuisineTag: string, difficulty: string) => {
  return fetch(`http://192.168.5.7:3001/recipe/${cuisineTag}/${difficulty}`)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => console.log(error))
}

export const recipeServices = {
  getRandomRecipe,
  getRecipeByCuisine,
};