const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("First time I connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectToMongo;
