const UserDB = require("../models/UserDB")
const User = require("../classes/User")

let userDB = new UserDB();

function getAllUsers(req, res){
    userDB.getAllUsers((err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    })
}

function getUserByName(req, res) {
    const name = req.params.name;
    userDB.getUserByName(name, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    })
}

function addUser(req, res) {
    const user = new User(
        null,
        req.body.fname,
        req.body.lname,
        req.body.password,
        req.body.picture,
        req.body.gender,
        req.body.address,
        req.body.phone,
        req.body.email
    )

    userDB.addUser(user, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}

function loginUsername(req, res) {
    var fname = req.body.fname
    var lname = req.body.lname
    var username = fname + "%" + lname
    var password = req.body.password
    userDB.loginUsername(username, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            var pwdValidjson = "invalid password"
            if (result[0].password == password) {
                pwdValidjson = "valid password"
            }

            res.json({password: pwdValidjson})
        }
    })
}

module.exports = { getAllUsers, getUserByName, addUser, loginUsername }