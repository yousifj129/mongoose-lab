const mongoose = require('mongoose');
const {createRecipe, getAllRecipes, updateRecipe, deleteRecipe, getRecipeByID} = require("./recipeUtils")
const dotenv = require("dotenv").config() // allows me to use .env values

async function connectToDB() {
    try {
        const connection = await mongoose.connect(process.env.CONNECTION)
        console.log("Connected to database!")
        return connection;

    } catch (error) {
        console.log("Connection failed.")
    }

}


connectToDB()
getAllRecipes()
// createRecipe(newRecipe)
// updateRecipe("688079c007e8d74baf9ca90c", newRecipe)