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
    console.log(restaurantName)
    restDB.getRestaurantByName(restaurantName, (err, result) => {
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = { getAllRestaurants, getRestaurantByName }