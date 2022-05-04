const mongoose = require('./index');
 
const RecipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      required: false,
    },
    difficulty: {
      type: String,
      required: true,
    },
    serves: {
      type: Number,
      required: false,
    },
    ingredients:  {
    type: Array,
    required: false,
      ingredientAmount: {
        type: Number,
        required: false,
      },
      ingredientName: {
        type: String,
        required: false,
      },
    },
    instructions: {
      type: String,
      required: false,
    },
    cuisineTag: {
      type: String,
      required: false,
    }
  }
);

const Recipe = mongoose.model('recipe', RecipeSchema);
module.exports = Recipe;