const recipeModel = require('../model/recipes.model');

//import router from express
const recipeRouter = require('express').Router();

// Fetche all the recipes
recipeRouter.get("/", async function (req, res) {
    try {
        const result = await recipeModel.find();
        return res.status(200).json({
            message: "Recipes fetched successfully",
            success: true,
            data: result,
        });

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
});

// Fetche recipe using the resipe ID
recipeRouter.get('/:recipeId', async function (req, res) {
    try {
        const recId = req.params.recipeId;  // Use req.params instead of req.query
        const recipe = await recipeModel.findById(recId);

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Recipe fetched successfully",
            success: true,
            data: recipe,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message
        });
    }
});

// Add new recipe

recipeRouter.post('/', async function (req, res) {
    try {
        const newRecipe = await recipeModel.create(req.body);

        return res.status(201).json({
            message: "Recipe added successfully",
            success: true,
            data: newRecipe,
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error creating recipe",
            error: err.message
        });
    }
});

// Update recipe

recipeRouter.patch('/:recipeId', async function (req, res) {
    try {
        const recId = req.params.recipeId;
        const updatedRecipe = await recipeModel.findByIdAndUpdate(recId, req.body, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({
                message: "Recipe not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Recipe updated successfully",
            success: true,
            data: updatedRecipe,
        });
    } catch (err) {
        return res.status(400).json({
            message: "Error updating recipe",
            error: err.message
        });
    }
});

// Delete recipe

recipeRouter.delete('/:recipeId', async function (req, res) {
    try {
        const recId = req.params.recipeId;
        const deletedRecipe = await recipeModel.findByIdAndDelete(recId);

        if (!deletedRecipe) {
            return res.status(404).json({
                message: "Recipe not found",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Recipe deleted successfully",
            success: true,
            data: deletedRecipe,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error deleting recipe",
            error: err.message
        });
    }
});

// Export the router
module.exports = recipeRouter;