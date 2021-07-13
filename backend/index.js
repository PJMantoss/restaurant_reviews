import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import RestaurantsDAO from './dao/restaurantsDAO.js';
dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

console.log(process.env.RESTREVIEWS_DB_URI);

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParse: true
    }
)
.catch(err => {
    console.error(err.stack);
})
.then(async client => {
    //Initial reference to the 'restaurants collection' in the database
    await RestaurantsDAO.injectDB(client);

    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
})