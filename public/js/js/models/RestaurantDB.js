console.log("restDB.js")
const db = require('../connectDB')

class RestaurantDB{
    getAllRestaurants(callback){
        let sql = "SELECT * from restaurant"
        db.query(sql, callback)
    }

    getRestaurantByName(name, callback){
        console.log(name)
        let sql = "select * from restaurant where name = ?"
        return db.query(sql, [name], callback)
    }
}

module.exports = RestaurantDB