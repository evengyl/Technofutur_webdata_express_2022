module.exports = (req, res, next) => {

    let { login, password } = req.body

    if(login && password)
    {
        if(login == "root" && password == "test1234")
        {
            next()
        }
        else{
            res.status(401).json({ message : "vous n'êtes pas admin !"})
        }
    }
    else
    {
        res.status(401).json({ message : "données admin manquantes"})
    }

}