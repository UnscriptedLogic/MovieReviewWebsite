console.log("restDB.js")
const db = require('../connectDB')

class RestaurantDB{
    getAllRestaurants(callback){
        let sql = "SELECT * from restaurant"
        db.query(sql, callback)
    }

    getRestaurantByName(name, callback){
        let sql = "SELECT * FROM restaurant WHERE name = ?"
        return db.query(sql, [name], callback)
    }

    getRestaurantByID(id, callback){
        let sql = "SELECT * FROM restaurant WHERE idRestaurant = ?"
        return db.query(sql, [id], callback)
    }

    updateRating(update, callback){
        let sql = "UPDATE restaurant SET rating = ? WHERE idRestaurant = ?"
        return db.query(sql, [update[0], update[1]], callback)
    }
}

module.exports = RestaurantDB