const mongoose = require('mongoose');

// schema

const recipeSchema = mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    instructions: {
        type: Array,
        required: true
    }
});

const recipeModel = mongoose.model('recipes', recipeSchema);

module.exports = recipeModel;