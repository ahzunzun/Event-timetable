// Load env variables
if (process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}



// Import dependencies 
const express = require('express')
const connectToDb = require("./db/connectToDb");
const eventRoute = require("./routes/eventPageRoutes")
const cors = require("cors");

// Create an express app
const app = express()

// Configure express app
app.use(express.json());
app.use(cors()); 
app.use("/api/events", eventRoute);

// Connect to database
connectToDb();

// Routing
app.get('/', (req, res) => {
    res.json({hello: "world"});
})



// Start our server
app.listen(process.env.PORT);