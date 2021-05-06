const express = require("express");
const {isLoggedIn} = require('../middlewares');
const pool = require("../config");
router = express.Router();

router.get('/bill', async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
        const [send_Ready] = await conn.query("select * from order_detail join cart using(cart_id) join customer using(cus_id) join product using(product_id)")

        res.json(send_Ready)
        conn.commit()
        res.status(200)
    }catch(error){
        conn.rollback()
        console.log(error)
        res.status(400).json(error.toString());
    }finally{
        conn.release()
      }
});

router.post('/confirm', async (req, res) =>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    console.log(req.body)

    try{
        
        conn.commit()
    }catch(error){
        conn.rollback()
        console.log(error)
        res.status(400).json(error.toString());
    }finally{
        conn.release()
      }
})

exports.router = router;
