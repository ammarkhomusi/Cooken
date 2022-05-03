const Recipe = require('../models/recipe');

const getRandomRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.aggregate([{$sample:{size:1}}]);
    return res.status(200).send({ res: recipe.pop(), error: false});
  } catch (error) {
    return res.status(500).send({ res: 'Internal Server Error', error : true})
  }
};

const getRecipeByCuisine = async (req, res) => {
  try {
    const { cuisineTag, difficulty } = req.params;
    let recipe;
    if (difficulty === 'any') {
      recipe = await Recipe.aggregate([{$match:{cuisineTag:cuisineTag }}, {$sample: {size:1}}]);
    } else {
      recipe = await Recipe.aggregate([{$match:{cuisineTag:cuisineTag, difficulty: difficulty}}, {$sample: {size:1}}]);
    }
    return res.status(200).send({ res: recipe.pop(), error: false});
  } catch (error) {
   return res.status(500).send({ res: 'Internal Service Error', error: true })
  }
};

const AddRecipe = async (req, res) => {
  try {
    const recipe = req.body
    if(!recipe) {
      return res.status(400).send({ res: 'Missing Fields', error : true})
    }
    const newRecipe = await Recipe.create(recipe);
    
    return res.status(201).send({ res: newRecipe, error: false })
  } catch (error) {
      console.log(error)
    return res.status(500).send({ res: 'Internal Service Error', error: true })
  }
}

module.exports = {
  getRandomRecipe,
  getRecipeByCuisine,
  AddRecipe }


