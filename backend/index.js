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
const basketRouter = require('./routes/basket')
const billRouter = require('./routes/bill')
const empRouter = require('./routes/emp')
app.use(productRouter.router)
app.use(indexRouter.router)
app.use(userRouter.router)
app.use(basketRouter.router)
app.use(billRouter.router)
app.use(empRouter.router)

const PORT  = process.env.PORT || 3000
// router.post('/', async function(req, res, next){
//     console.log(req.body)
//     res.status(201).send('ok')
//   })
  
app.listen(PORT, ()=>console.log(`server is runing in port ${PORT}`))