const mockedDb = require('../../mocked_db/db.json')

const getAll =  async () => {
    let response;
    try {

         // response = await db.query(`SELECT * FROM phones`)
        response = mockedDb;
    } catch (e) {
        throw new Error(e)
    }
    return response
}


module.exports = {
    getAll
}