// Setting up client - do not change
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://ashughes:randomstring@test.mzctw6w.mongodb.net/?retryWrites=true&w=majority';

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
    const result = await client.db('Test').collection('events').insertOne(newEvent);
}


/* Function that connects to the database and adds an event with the following information
Start and end time integers in 24hr time
Date in the format new Date("2023-09-13")
All other variables are strings */
async function runCreateEvent(client, eventTitle, eventDate, eventStartTime, eventEndTime,
    eventDesc, eventVenue, eventFee) {

    try {
        await client.connect();
        
        await createEvent(client,
            {
                title: eventTitle,
                date: eventDate,
                startTime: eventStartTime,
                endTime: eventEndTime,
                description: eventDesc,
                venue: eventVenue,
                fee: eventFee
            }
        );

    } catch (e) {
        console.error(e);
    
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}


async function findEventsFromDate(client) {
    const cursor = await client.db('Test').collection('events').find().sort({ date: 1});
    const results = await cursor.toArray();
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

    if (upcomingEvents.length > 0) {
        // Currently prints to console, replace the below forEach loop of the results
        // with the code to display the info instead when aadding to the Event webpage
        console.log(`Upcoming events from current date:`);
        upcomingEvents.forEach((event) => {
            console.log();
            console.log(`   Event title: ${event.title}`);
            console.log(`   Event date: ${event.date}`);
            console.log(`   Event start time: ${event.startTime}`);
        });
    } else {
        console.log(`None found from the current date.`);
    }

    upcomingEvents.forEach((event) => {
        titleDescription.push(event.title);
        titleDescription.push(event.description);
    });

    while (titleDescription.length != 6) {
        titleDescription.push('More events coming soon!');
        titleDescription.push('Check back later.');
    };
    return titleDescription;
}

async function runFindEventsFrom(client) {
    try {
        await client.connect();
        
        await findEventsFromDate(client);

    } catch (e) {
        console.error(e);
    
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

//runFindEvents(new Date('2023-11-09')).catch(console.dir);
//runCreateEvent(client, 'Another One', new Date('2023-09-30'), 1400, 1600, '...', 'Example Room', 'Gold coin').catch(console.dir);
runFindEventsFrom(client).catch(console.dir);
/*
async function tester() {
    const date = new Date();
    console.log(`${date}`);
}
tester();
*/