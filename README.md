Recipes App

This is a basic CRUD (Create, Read, Update, Delete) application for managing recipes built using Node.js, Express.js, Mongoose (MongoDB), and Postman for API testing. The project follows the MVC (Model-View-Controller) architecture pattern.

Features

- **Create Recipe**: Add a new recipe to the database.
- **Read Recipes**: Retrieve all recipes or a specific recipe by its ID.
- **Update Recipe**: Modify an existing recipe by its ID.
- **Delete Recipe**: Remove a recipe from the database by its ID.

Tech Stack

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Framework for building web applications and APIs.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **MongoDB**: NoSQL database for storing the recipes.
- **Postman**: API development environment used for documenting and testing the API endpoints.

Project Structure

The project follows the MVC architecture:

- **models/**: Contains Mongoose models (schema definitions) for the recipe data.
- **views/**: (If applicable) Contains the front-end or templating files.
- **controllers/**: Contains the logic for handling requests and responses (CRUD operations).
- **routes/**: Contains the API routes/endpoints.
- **config/**: Configuration for database connection and environment variables.

Endpoints

Here are the API endpoints that the app provides:

**POST** new recipe.
**GET** all recipes.
**GET** recipe by ID.
**PUT** recipe by ID.
**DELETE**  recipe by ID.

