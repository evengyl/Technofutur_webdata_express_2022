module.exports = (req, res, next) => {

    //loca.../?order=asc ou desc
    let query = req.query
    if(query)
    {
        if(query.order){
            res.locals.orderBy = query.order
        }
        else{
            res.locals.orderBy = "asc"
        }
    }
    else{
        res.locals.orderBy = "asc"
    }

    next()
}