const dbConnect = require("./db").get()


const AuthModel = {
    create : (firstname, lastname, email, password) => {

        return dbConnect.then((conn) => {
            return conn.query("INSERT INTO users (prenom, nom, email, password) VALUES (?, ?, ?, ?)", [firstname, lastname, email, password])
        })
    },


    verifyIfUserExist : (email) => {
        return dbConnect.then((conn) => {
            return conn.query("SELECT id from users where email = ?", [email])
        })
    }
}


module.exports = AuthModel