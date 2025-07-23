const Recipe = require("./models/Recipe")

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


async function getAllRecipes() {
    try {
        const allRecipes = await Recipe.find()
        for (let i = 0; i < allRecipes.length; i++) {
            console.log(`${allRecipes[i].name} is an ${allRecipes[i].difficulty} recipe and takes ${allRecipes[i].prepTime} minutes to prepare`)
        }
        return allRecipes
    }
    catch {
        console.log("Failed to create recipe.")
    }

}

async function updateRecipe(recipeId, newRecipeData) {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, { new: true })
        console.log(updatedRecipe)
        return updatedRecipe
    }
    catch {
        console.log("Failed to update recipe.")
    }
}

async function deleteRecipe(recipeId) {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)
        console.log("Recipe successfully deleted.")
        return deletedRecipe
    }
    catch {
        console.log("Failed to delete recipe.")
    }
}
async function getRecipeByID(id) {
    try {
        const recipe = await Recipe.findById(id)
        if (recipe == null) {
            console.log("No recipe with this ID exists.")
        } else {
            console.log(recipe)
        }
        return recipe
    }
    catch (error){
        console.log("Failed to find recipe.")
    }
}

module.exports = {createRecipe, getAllRecipes, updateRecipe, deleteRecipe, getRecipeByID}