const express = require('express');
const path = require('path');
const cors = require('cors')


const app = express();

const { logger } = require('./middlewares')
app.use(logger)

app.use(cors())

// const logger = (req, res, next)=>{
//     console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}: ${moment().format()}`)
// }
// app.use(logger)



app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const user = require('./routes/user')
const indexRouter = require('./routes/index')
app.use(indexRouter.router)
app.use(user.router)

const PORT  = process.env.PORT || 3000
router.post('/', async function(req, res, next){
    console.log(req.body)
    res.status(201).send('ok')
  })
  
app.listen(PORT, ()=>console.log(`server is runing in port ${PORT}`))