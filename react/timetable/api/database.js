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

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createEvent(client, newEvent){
    const result = await client.db("Test").collection("events").insertOne(newEvent);
    console.log(`New event created with the following id: ${result.insertedId}`);
}


async function run() {
    try {
        await client.connect();
    
        await listDatabases(client);
        
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
        
    } catch (e) {
        console.error(e);
    
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);