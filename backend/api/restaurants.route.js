import express from 'express';
import RestaurantsController from './restaurants.controller.js';
import ReviewsController from './restaurants.controller.js';

const router = express.Router();

router.route("/").get(RestaurantsController.apiGetRestaurants);

router
    .route("/review")
    .post(ReviewsController.apiPostReview)
    .update(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)

export default router;
//(req, res) => res.send("Hello World")