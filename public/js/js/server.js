console.log("Server.js")
const express  = require('express');

const restaurantController = require("./controllers/RestaurantController")
const reviewController = require("./controllers/ReviewController")
const userController = require("./controllers/UserController")

const app = express();
app.use(express.json())

//app.route(website route).method(function to call)
app.route("/restaurants").get(restaurantController.getAllRestaurants)
app.route("/restaurants/:name").post(restaurantController.getRestaurantByName)

app.route("/user").get(userController.getAllUsers)
app.route("/user").post(userController.addUser)
app.route("/user/:name").post(userController.getUserByName)
app.route("/userlogin").post(userController.loginUsername)

app.route("/reviews").get(reviewController.getAllReviews)
app.route("/reviews").post(reviewController.addReview)

app.listen(8081, () => {
    console.log("Server started on port 8081");
})