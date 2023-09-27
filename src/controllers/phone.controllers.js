const expressAsyncHandler = require("express-async-handler");
const phoneService = require('../services/phone.service')
const getAll = () => expressAsyncHandler(async (req, res, next) => {
    // const result = phone.service.
    let result

    try {
        result = await phoneService.getAll()
    } catch (e) {
        console.error("error")
        next(e)
    }
    res.send(result);
})

module.exports = {
    getAll
}