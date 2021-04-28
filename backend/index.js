const express = require('express');
const path = require('path')
const moment = require('moment')
const app = express();


const logger = (req, res, next)=>{
    console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}: ${moment().format()}`)
}
app.use(logger)

app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const PORT  = process.env.PORT || 3000

app.listen(PORT, ()=>console.log(`server is runing in port ${PORT}`))
