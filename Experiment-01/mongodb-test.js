require("dotenv").config();

const { MongoClient } = require("mongodb");

// Read MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI;

// Create MongoDB client
const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 10000
});

// Function to establish a connection
async function connectToMongoDB() {
    try {
        console.log("Attempting to connect to MongoDB Atlas...");

        // Connect to MongoDB
        await client.connect();

        // Select our database
        const database = client.db("mean_mern_lab");

        // Send a ping command to verify connectivity
        await database.command({ ping: 1 });

        console.log("MongoDB Atlas connected successfully!");
        console.log("Database Name:", database.databaseName);
        console.log("Connection Test: PASSED");

    } catch (error) {
        console.error("MongoDB Connection Failed!");
        console.error("Error:", error.message);

        process.exitCode = 1;

    } finally {
        // Close connection
        await client.close();
    }
}

connectToMongoDB();