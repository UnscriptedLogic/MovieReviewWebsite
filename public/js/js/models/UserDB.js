const db = require('../connectDB')

class UserDB{
    getAllUsers(callback) {
        let sql = 'SELECT * from user'
        db.query(sql, callback)
    }

    getUserByName(name, callback){
        let sql = 'SELECT * from user where fname = ?'
        return db.query(sql, [name], callback)
    }

    addUser(user, callback){
        const sql = "INSERT INTO user (id, fname, lname, password, display_picture, gender, address, mb_number, email) values(?, ?, ?, ?, ?, ?, ?, ?, ?)"
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
        let sql = 'update user set fname = ?, lname = ?, password = ?, display_picture = ?, gender = ?, address = ?, mb_number = ?, email = ? where id = ?'
        return db.query(
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
        let sql = "delete from user where id = ?"
        return db.query(sql, [user.getid()], callback)
    }

    loginUsername(username, callback) {
        var nameArray = username.split("%")
        let sql = "select password from user where fname = ? and lname = ?"
        return db.query(sql, [nameArray[0], nameArray[1]], callback)
    }
}

module.exports = UserDB