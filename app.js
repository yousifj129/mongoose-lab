const mongoose = require('mongoose');
const {createRecipe, getAllRecipes, updateRecipe, deleteRecipe, getRecipeByID} = require("./recipeUtils")

async function connectToDB() {
    try {
        const connection = await mongoose.connect("mongodb+srv://yousif:vD3i5CzNXuwaVNNd@cluster0.ljudaiz.mongodb.net/recipesDB?retryWrites=true&w=majority&appName=Cluster0")
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