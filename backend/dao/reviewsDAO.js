import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectID;

let reviews;

export default class ReviewsDAO {
    static async injectDB(conn){
        if(reviews){
            return
        }
        try{
            reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("reviews")
        }catch(e){
            console.error(`Unable to establish collection handles in userDAO: ${e}`)
        }
    }

    static async addReview(retsuarantId, user, review, date){
        try{
            const reviewDoc = {
                user: user.name,
                user_id: user._id,
                text: user.review,
                date: new Date(),
                restaurantId: ObjectId(restaurantId)
            }
        }catch(e){
            console.error(`Unable to post review ${e}`);
            return { error: e }
        }
    }

    static async updateReview(){}

    static async deleteReview(){}
}