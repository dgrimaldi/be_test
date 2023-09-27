exports.routesLog = (req, res, next) => {
    console.dir(`Client send a request for ${(req.url)}`)
    next()
}

