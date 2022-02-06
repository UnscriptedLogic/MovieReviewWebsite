const db = require('../connectDB')

class UserDB{
    getAllUsers(callback) {
        const sql = 'SELECT * FROM user'
        db.query(sql, callback)
    }

    getUserByName(name, callback){
        const sql = 'SELECT * FROM user WHERE fname = ?'
        db.query(sql, [name], callback)
    }

    getUserByID(id, callback) {
        const sql = "SELECT * FROM user WHERE id = ?"
        db.query(sql, [id], callback)
    }

    addUser(user, callback){
        const sql = "INSERT INTO user (id, fname, lname, password, display_picture, gender, address, mb_number, email) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)"
        db.query(
            sql,
            [
                user.getid(),
                user.getfname(), 
                user.getlname(), 
                user.getpassword(),
                user.getpicture(),
                user.getgender(),
                user.getaddress(),
                user.getphone(), 
                user.getemail()
            ],
            callback
        )
    }

    updateUser(user, callback){
        const sql = 'UDPATE user SET fname = ?, lname = ?, password = ?, display_picture = ?, gender = ?, address = ?, mb_number = ?, email = ? WHERE id = ?'
        db.query(
            sql,
            [
                user.getfname(),
                user.getlname(), 
                user.getpassword(),
                user.getpicture(),
                user.getgender(),
                user.getaddress(),
                user.getphone(), 
                user.getemail(),
                user.getid()
            ],
            callback
        )
    }

    deleteUser(user, callback) {
        const sql = "DELETE FROM user WHERE id = ?"
        db.query(sql, [user.getid()], callback)
    }

    loginUsername(username, callback) {
        var nameArray = username.split("%")
        const sql = "SELECT * FROM user WHERE fname = ? AND lname = ?"
        db.query(sql, [nameArray[0], nameArray[1]], callback)
    }
}

module.exports = UserDB