
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
        },
    ingredients: {
        type: [String]
    },
    instructions: String,
    prepTime:Number,
    difficulty:{
        type: String,
        default: 'Easy',
        enum:['Easy', 'Medium', 'Hard']
    }

})


const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe