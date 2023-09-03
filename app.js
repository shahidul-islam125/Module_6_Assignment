const express = require('express')
const apiRouter = require('./src/Routes/api')

const app = express()
app.use('/api', apiRouter)

//export this file
module.exports = app;