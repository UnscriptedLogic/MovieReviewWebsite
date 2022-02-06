console.log("restController.js")
const RestaurantDB = require('../models/RestaurantDB')

let restDB = new RestaurantDB()

function getAllRestaurants(req, res){
    restDB.getAllRestaurants((err, result) => {
        if(err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function getRestaurantByName(req, res){
    const restaurantName = String(req.params.name)
    restDB.getRestaurantByName(restaurantName, (err, result) => {
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }   
    })
}

function getRestaurantByID(req, res){
    const restaurantID = String(req.params.id);
    restDB.getRestaurantByID(restaurantID, (err, result) => {
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function updateRating(req, res){
    const restaurantID = String(req.body.id);
    const newRating = parseInt(req.body.rating);
    restDB.updateRating([newRating, restaurantID], (err, result) => {
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
}


module.exports = { getAllRestaurants, getRestaurantByName, getRestaurantByID, updateRating }