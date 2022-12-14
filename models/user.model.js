const dbConnect = require("./db").get()

const UserModel = {

    getAll : (orderBy) => {
        return dbConnect.then((conn) => {
            return conn.query(`SELECT * FROM users order by id ${orderBy}`)
        })
    },

    getOne : (id) => {
        return dbConnect.then((conn) => {
            return conn.query('SELECT * FROM users WHERE id = ?', [id])
        })
    },

    

    update : (id, firstname, lastname, email, password) => {

        return dbConnect.then((conn) => {
            return conn.query('UPDATE users SET prenom = ?, nom = ?, email = ?, password = ? WHERE id = ?', [firstname, lastname, email, password, id])
        })
    },

    delete : (id) => { 
        return dbConnect.then((conn) => {
            return conn.query("DELETE from users where id = ?", [id])
        })
    }



}

module.exports = UserModel