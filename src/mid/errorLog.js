exports.errorLog = (err, req, res, next) => {
    console.error(err)
    next(err)
}

