const express = require("express");
const pool = require("../config");
const {isLoggedIn} = require('../middlewares');
router = express.Router();

router.get("/product", async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
        const product_list = await conn.query('SELECT * FROM product group by product_name')
        res.json(product_list[0])
    }catch(error){
        console.log("Product : " + error)
    }
});
router.put("/product/cart", isLoggedIn, async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    const name = req.body.name
    const product_id = req.body.product_id
    const cus_id = req.user.cus_id
    const comment = req.body.comment
    const price = req.body.price

    try{
        // console.log(cus_id)
        await conn.query("INSERT INTO  cart(cus_id,comment)" + "VALUES(?,?)",[cus_id, comment])
        let cart_id = await conn.query('select cart_id from cart  where cus_id = ?',[cus_id] )
        cart_id = cart_id[0][0].cart_id
        console.log(cart_id)
        await conn.query('INSERT INTO order_detail(price, unit, cart_id, product_id)',[price, 1, cart_id, product_id])
        conn.commit()
        res.status(200).send()
    }catch(error){
        conn.rollback()
        console.log(error.toString())
        res.status(400).json(error.toString());
    }finally{
        conn.release()
    }
})

exports.router = router;