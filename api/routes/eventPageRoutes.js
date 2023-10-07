//import db from "../db/test.mjs";

const router = require("express").Router();
const db = require("../db/connectToDb.js");

// This function will get the next three event records by date.
router.get("/", async (req, res) => {
    let collection = await db.collection("events");
    let results = await collection.find().sort({ date: 1}).toArray();
    const currentDate = new Date();
    const upcomingEvents = [];
    const titleDescription = [];

    results.forEach((result) => {
        if (result.date.getTime() > currentDate.getTime()) {
            if (upcomingEvents.length < 3) {
                upcomingEvents.push(result);
            }
        }
    });

    upcomingEvents.forEach((event) => {
        titleDescription.push(event.title);
        titleDescription.push(event.description);
    });

    while (titleDescription.length != 6) {
        titleDescription.push('More events coming soon!');
        titleDescription.push('Check back later.');
    };
    console.log(`${titleDescription[0]}`);
    console.log(`${titleDescription[1]}`);
    console.log(`${titleDescription[2]}`);
    console.log(`${titleDescription[3]}`);

    res.status(200).json(titleDescription);
});

module.exports = router;