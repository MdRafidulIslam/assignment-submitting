const express = require('express')
const app = new express()
const router = require('./src/routes/api')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const multer = require('multer')
var jwt = require('jsonwebtoken');

app.use(express.json())
app.use(cors())
app.use(cookieParser)



app.use('/api', router)
module.exports = app;

