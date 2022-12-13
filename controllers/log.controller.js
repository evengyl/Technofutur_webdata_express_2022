const { json } = require("express")
const LogsModel = require("../models/log.model")


const LogsController = {

    getAll(req, res)
    {
        LogsModel.getAll().then((allLogs) => {
            if(allLogs)
            {
                res.status(200).json(allLogs)
            }
            else{
                res.status(404).json({ message : "log not found"})
            }
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        })
    },

    deleteAll(req, res){
        LogsModel.deleteAll().then((doneDeleteLogs) => {
            console.log(doneDeleteLogs)

            if(doneDeleteLogs)
            {
                res.status(200).json({ message : "all logs deleted"})
            }else{
                res.status(404).json({ message : "log not found"})
            }
            
        })
        .catch((error) => {
            res.status(500).json({ message : error.sqlMessage})
        })
    }
}


module.exports = LogsController