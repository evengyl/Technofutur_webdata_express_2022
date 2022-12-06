const dbConnect = require("./db").get()

const UserModel = {

    getAll : () => {
        return dbConnect.then((conn) => {
            return conn.query('SELECT * FROM users')
        })
    },

    getOne : (id) => {
        return dbConnect.then((conn) => {
            return conn.query('SELECT * FROM users WHERE id = ?', [id])
        })
    },

    create : (firstname, lastname, email, password) => {

        return dbConnect.then((conn) => {
            return conn.query("INSERT INTO users (prenom, nom, email, password) VALUES (?, ?, ?, ?)", [firstname, lastname, email, password])
        })
    },

    update : (id, firstname, lastname, email, password, next) => {

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