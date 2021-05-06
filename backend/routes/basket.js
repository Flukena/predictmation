const express = require("express");
const {isLoggedIn} = require('../middlewares');
const pool = require("../config");
router = express.Router();

router.get("/basket", isLoggedIn, async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
        const [cart_id] = await conn.query("SELECT cart_id from cart where cus_id = ?",[req.user.cus_id])

        if(cart_id.length > 0){
            const basket = await conn.query("SELECT * from order_detail join product using(product_id) where cart_id = ?", [cart_id[0].cart_id])
            console.log(basket[0])
            return res.json(basket[0])
        }
        res.send('ok')
        conn.commit()
    }catch(error){
        conn.rollback()
        res.json(error.toString())

    }finally{
        conn.release()
      }
})
router.delete('/basket/:order_id', async(req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    const order_id = req.params.order_id
    // console.log(order_id)
    try{
        console.log(order_id)
        await conn.query('DELETE FROM order_detail where order_d_id = ?', [order_id])
        conn.commit()
        res.status(400).send("ok")
    }catch(error){
        console.log(error)
        conn.rollback()
        res.json(error.toString())

    }finally{
        conn.release()
      }
} )

exports.router = router;