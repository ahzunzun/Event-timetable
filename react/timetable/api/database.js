// Setting up client - do not touch
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ashughes:randomstring@test.mzctw6w.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Function that adds a new event to the database
async function createEvent(client, newEvent) {
    const result = await client.db("Test").collection("events").insertOne(newEvent);
}

// Function that finds events within the database on a certain date
async function findEventsOnDate(client, currentDate) {
    const cursor = await client.db("Test").collection("events").find(
        { date: currentDate }
    ).sort({ startTime: 1});
    const results = await cursor.toArray();

    if (results.length > 0) {
        // Currently prints to console, replace the below forEach loop of the results with the code to display the info instead
        console.log(`Found events on current date:`);
        results.forEach((result) => {
            console.log();
            console.log(`   Event title: ${result.title}`);
            console.log(`   Event date: ${result.date}`);
            console.log(`   Event start time: ${result.startTime}`);
        });
    } else {
        console.log(`None found on the current date.`);
    }
}

// Function that connects to the database and adds an event with the following information
// Start and end time integers in 24hr time
// Date in the format new Date("2023-09-13")
// All other variables are strings
async function runCreateEvent(eventTitle, eventDate, eStartTime, eEndTime, eDesc, eVenue, eFee) {
    try {
        await client.connect();
        
        await createEvent(client,
            {
                title: eventTitle,
                date: eventDate,
                startTime: eStartTime,
                endTime: eEndTime,
                description: eDesc,
                venue: eVenue,
                fee: eFee
            }
        );

    } catch (e) {
        console.error(e);
    
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

// Function that connects to database and returns a list of events on a specified date (currently prints info to console)
async function runFindEvents(date) {
    try {
        await client.connect();
        
        await findEventsOnDate(client, date);

    } catch (e) {
        console.error(e);
    
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

/*
// IGNORE
// Used for testing
async function run() {
    try {
        await client.connect();
        
        await createEvent(client,
            {
                title: "Added Event",
                date: new Date("2023-09-13"),
                startTime: 1100,
                endTime: 1300,
                description: "Added",
                venue: "Room 100",
                fee: "Free"
            }
        );
        

        await findEventsOnDate(client, new Date("2023-09-13"));

    } catch (e) {
        console.error(e);
    
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);
*/