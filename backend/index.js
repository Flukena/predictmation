const express = require('express');
const path = require('path');
const cors = require('cors')
const {isLoggedIn, logger} = require('../backend/middlewares')
const app = express();

app.use(logger)

app.use(cors())

// const logger = (req, res, next)=>{
//     console.log(`${req.protocol}://${req.get('host')} ${req.originalUrl}: ${moment().format()}`)
// }
// app.use(logger)



app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')

app.use(productRouter.router)
app.use(indexRouter.router)
app.use(userRouter.router)

const PORT  = process.env.PORT || 3000
// router.post('/', async function(req, res, next){
//     console.log(req.body)
//     res.status(201).send('ok')
//   })
  
app.listen(PORT, ()=>console.log(`server is runing in port ${PORT}`))