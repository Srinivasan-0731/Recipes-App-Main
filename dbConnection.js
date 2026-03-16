const mongoose = require('mongoose');

// Connect to MongoDB
const mongoURL = "mongodb+srv://Srinivasan:srini@cluster0.xsxf8tm.mongodb.net/?appName=Cluster0"
async function createDbConnection() {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = { createDbConnection };