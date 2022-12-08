module.exports = (req, res, next) => {
    console.log("Access : " + req.method + " - With URL : " + req.url + " - At : " + new Date().toUTCString())
    next()
}