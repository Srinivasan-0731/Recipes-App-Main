const Express = require('express');
const mongoose = require('mongoose');
const { createDbConnection } = require('./dbConnection');
const recipeController = require("./controller/recipes.controller");
const recipeModel = require("./model/recipes.model");

// create DB connection

createDbConnection()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Failed to connect to MongoDB', error);
    });

//Environment variables
require('dotenv').config();

//Create a API server
const API_Server = Express();

//passing incoming request body as a json
API_Server.use(Express.json());

//Inject router
API_Server.use('/recipes', recipeController);


API_Server.get('/', function (req, res) {
    return res.json({
        message: 'Welcome to Recipes App!',
        success: true,
    });
});

// Start and Listen incoming requests
API_Server.listen(process.env.PORT, process.env.HOSTNAME, function () {
    console.log("Server started");
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`)
});