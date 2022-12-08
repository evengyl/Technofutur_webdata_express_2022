const privateDataModel = require("../models/privateData.model")


const privateDataController = {

    getAll : (req, res) => {
        let datas = privateDataModel.getAll()
        res.status(200).json(datas)
    },

    getOne : (req, res) => {
        let id = req.params.id
        let data = privateDataModel.getOne(id)
        res.status(200).json(data)
    }

}


module.exports = privateDataController