const mongoose = require('./index');

const RecipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    serves: {
      type: Number,
      required: true,
    },
    ingredients:  {
    type: Array,
    required: true,
      ingredientAmount: {
        type: Number,
        required: true,
      },
      ingredientName: {
        type: String,
        required: true,
      },
    },
    instructions: {
      type: String,
      required: true,
    },
    cuisineTag: {
      type: String,
      required: true,
    }
  }
);

const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe;