import Recipe from '../models/recipe';
import { Request, Response } from 'express';
 
export const getRandomRecipe = async (res: Response) => {
  try {
    const recipe = await Recipe.aggregate([{$sample:{size:1}}]);
    return res.status(200).send({ res: recipe.pop(), error: false});
  } catch (error) {
    return res.status(500).send({ res: 'Internal Server Error', error : true})
  }
};

export const getRecipeByCuisine = async (req: Request, res: Response) => {
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

export const AddRecipe = async (req: Request, res: Response) => {
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