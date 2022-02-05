console.log("Server.js")
const express  = require('express');

const restaurantController = require("./controllers/RestaurantController")
const reviewController = require("./controllers/ReviewController")
const userController = require("./controllers/UserController")

const app = express();
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


//app.route(website route).method(function to call)
app.route("/restaurants").get(restaurantController.getAllRestaurants)
app.route("/restaurants/id/:id").post(restaurantController.getRestaurantByID)
app.route("/restaurants/name/:name").post(restaurantController.getRestaurantByName)

app.route("/user").get(userController.getAllUsers)
app.route("/user").post(userController.addUser)
app.route("/user/id/:id").post(userController.getUserByID)
app.route("/user/name/:name").post(userController.getUserByName)
app.route("/userlogin").post(userController.loginUsername)

app.route("/reviews").get(reviewController.getAllReviews)
app.route("/reviews/restaurantid/:id").post(reviewController.getReviewsByRestaurantID)
app.route("/reviews/userid/:id").post(reviewController.getReviewsByUserID)
app.route("/reviews").post(reviewController.addReview)

app.listen(8081, () => {
    console.log("Server started on port 8081");
})