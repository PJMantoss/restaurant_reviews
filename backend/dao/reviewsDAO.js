import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;

let reviews;

export default class ReviewsDAO {
    static async injectDB(conn){
        if(reviews){
            return
        }
    }
}