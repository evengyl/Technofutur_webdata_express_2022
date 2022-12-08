const adminSystemCompta = [
    {
        id : 1,
        token : "100dd613144ede0a650e8e5875865802c8addb0bb311dcef81151ad0373d02f1",
        admin : true,
        sold : 10278500000,
        adminPassword : "god1"
    },
    {
        id : 2,
        token : "100dd613144ede0a650e8e5875865802c8addb0bb311dcef81151ad0373d02f1",
        admin : true,
        sold : 2000,
        adminPassword : "god2"
    },
    {
        id : 3,
        token : "100dd613144ede0a650e8e5875865802c8addb0bb311dcef81151ad0373d02f1",
        admin : true,
        sold : 100105280000,
        adminPassword : "god3"
    },
]


const privateDataModel = {
    
    getAll : () => {
        return adminSystemCompta
    },

    getOne : (id) => {
        return adminSystemCompta.find(data => data.id == id)
    }
}


module.exports = privateDataModel