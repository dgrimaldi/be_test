const express = require('express')
const cors = require("cors");
const phonesRouters = require('./src/routes/phone.routes');
const {routesLog} = require("./src/mid/routesLog");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routesLog)

// Here we will implement the router
app.use('/api/v1/phones', phonesRouters)

const port = 3001
app.listen(port, () =>  {
    console.log(`App is listening at port ${port}`)
})