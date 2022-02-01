console.log("connectDB.js")
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
	port: 3306,
	user: "root",
	password: "root@851",
	database: "restaurant_review"
})

connection.connect((err) => {
	if (err) throw err
	console.log("Connected to database")
})

module.exports = connection;