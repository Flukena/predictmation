const express = require('express');
const path = require('path');
const moment = require('moment');
const cookie = require('cookie-session');
const cors = require('cors')
const path = require('path');
const moment = require('moment');
const cookie = require(cookie-session);
const cors = require('cors')


const app = express();

app.use(cors())

const logger = (req, res, next)=>{
    console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}: ${moment().format()}`)
}
app.use(logger)

app.use(cookie({
    name:'session',
    keys:['key1', 'key2'],
    maxAge: 3600 * 1000
}))

app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const PORT  = process.env.PORT || 3000

app.listen(PORT, ()=>console.log(`server is runing in port ${PORT}`))