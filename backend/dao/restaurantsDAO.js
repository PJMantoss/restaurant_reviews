import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;

//Variable to save a reference to our DB
let restaurants;

export default class RestaurantsDAO {
    //Method is called as soon as the server starts. This initially connects our app to the DB
    static async injectDB(conn){
        if(restaurants){
            return
        }try{
            restaarants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants");
        } catch(e){
            console.error(`Unable to establish a collection handle in restaurantsDAO: ${e}`);
        }
    }

    //Function that gets a list of restaurants from the database
    static async getRestaurants({
        filters = null,
        page = 0,
        restaurantsPerPage = 20,
    } = {}) {
        let query;
        if(filters){
            if("name" in filters){
                query = { $text: { $search: filters["name"] } }
            } else if ("cuisine" in filters){
                query = { "cuisine": { $eq: filters["cuisine"] } }
            } else if ("zipcode" in filters){
                query = { "address.zipcode": { $eq: filters["zipcode"] } }
            }
        }

        let cursor;

        try {
            cursor = await restaurants
             .find(query)
        } catch(e){
            console.error(`Unable to issue find command, ${e}`);
            return { restaurantsList: [], totalNumRestaurants: 0 };
        }

        const displayCursor = cursor.limit(restaurantsPerPage).skip(restaurantsPerPage * page);

        try{
            const restaurantsList = await displayCursor.toArray();
            const totalNumRestaurants = await restaurants.countDocuments(query);

            return { restaurantsList, totalNumRestaurants };
        }catch(e){
            console.error(`Unable to convert cursor to array or problem counting documents, ${e}`);

            return { restaurantsList: [], totalNumRestaurants: 0 };
        }
    }

    // static async getRestaurantByID(id){
    //     try{
    //         const pipeline = [
    //             {
    //                 $match: {
    //                     _id: new ObjectId(id)
    //                 }
    //             },
    //             {
    //                 $lookup: {
    //                     from: "reviews",
    //                     let: {
    //                         id: "$_id",
    //                     },
    //                     pipeline: [
    //                         {
    //                             $match: {
    //                                 $expr: {
    //                                     $eq: ["$restaurant_id", "$$id"],
    //                                 },
    //                             }
    //                         },
    //                         {
    //                             $sort: {
    //                                 date: -1
    //                             }
    //                         }
    //                     ],
    //                     as: "reviews",
    //                 },
    //             },
    //             {
    //                 $addFields: {
    //                     reviews: "$reviews"
    //                 }
    //             }
    //         ]

    //         return await restaurants.aggregate(pipeline).next();
    //     }catch(e){
    //         console.error(`something went wrong in getRestaurantByID: ${e}`)
    //         throw e;
    //     }
    // }
}