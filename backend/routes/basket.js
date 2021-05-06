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

    }
})


exports.router = router;