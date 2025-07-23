const Recipe = require("./models/Recipe")
const mongoose = require('mongoose');

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

async function createRecipe(newRecipe) {
    try {
        const createdRecipe = await Recipe.create(newRecipe)
        console.log(createdRecipe)
        return createdRecipe
    }
    catch {
        console.log("Failed to create recipe.")
    }

}

const newRecipe = {
    name: "Um Ali",
    ingredients: ["Puff Pastry", "Milk"],
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
}
