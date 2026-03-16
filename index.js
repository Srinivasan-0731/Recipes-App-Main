const Express = require('express');
const mongoose = require('mongoose');
const { createDbConnection } = require('./dbConnection');
const recipeController = require("./controller/recipes.controller");

require('dotenv').config();

const API_Server = Express();

API_Server.use(Express.json());

//  CORS add pannunga (important for render)
const cors = require("cors");
API_Server.use(cors());

createDbConnection()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Failed to connect to MongoDB', error);
    });

API_Server.use('/recipes', recipeController);

API_Server.get('/', function (req, res) {
    return res.json({
        message: 'Welcome to Recipes App!',
        success: true,
    });
});

//  render correct port
const PORT = process.env.PORT || 4000;

API_Server.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});