const express = require("express");
const pool = require("../config");
const {isLoggedIn} = require('../middlewares');
router = express.Router();

router.get("/product", async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
        const product_list = await conn.query('SELECT * FROM product group by product_name')
        res.status(200).json(product_list[0])
        conn.commit()

    }catch(error){
        console.log("Product: ***###" + error.toString())
        conn.rollback()
        res.status(400).send(error.toString());
    }
});
router.put("/product/cart", isLoggedIn, async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    const name = req.body.name
    const product_id = req.body.product_id
    const cus_id = req.user.cus_id
    const comment = req.body.comment || "not comment"
    const price = req.body.price

    try{
        // console.log(cus_id)
        let cart_id = await conn.query('select cart_id from cart  where cus_id = ?',[cus_id])
        let [dep] = await conn.query("select unit, order_d_id from order_detail join cart using(cart_id) where cus_id = ? and product_id = ?", [cus_id, product_id])
        console.log(dep)
        let check = true
        if(dep.length > 0){
            await conn.query("update order_detail set unit = ? where order_d_id = ?", [dep[0].unit+1, dep[0].order_d_id])
            check = false
        }
        else if(cart_id[0].length  < 1){
            await conn.query("INSERT INTO cart(cus_id, comment) VALUES(?,?) ",[cus_id, comment])
        }
            cart_id = await conn.query('select cart_id from cart  where cus_id = ?',[cus_id] )
            if(check){
                await conn.query("INSERT INTO order_detail(price, unit, cart_id, product_id) VALUES(?, ?, ?,?)",[price, 1, cart_id[0][0].cart_id, product_id])

            }

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
router.get('/product/count', isLoggedIn, async(req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
        const [cart_id] = await conn.query('select cart_id from cart where cus_id= ? ',[req.user.cus_id])

        if(cart_id.length  < 0){
            conn.commit()
             return res.json({count:0})
        }else{
        const [count] = await conn.query("select * from order_detail where cart_id = ? ", [cart_id[0].cart_id])
            conn.commit()
            let num = 0
            for(var i = 0; i< count.length ; i++){
                num += (count[i].unit)
                // num += count[i].unit
            }
             return res.json({count:num})   
        }

    }catch(error){
        console.log(error)
        conn.rollback()
        res.status(400).json(error.toString())
    }
})
router.get('/product/size/:product_name', isLoggedIn, async(req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
  
        const [sizelist] = await conn.query("SELECT product_price, product_size from product where product_name = ?", [req.params.product_name])
        console.log(sizelist)
        res.json(sizelist)
        
    }catch(error){
        console.log(error)
        conn.rollback()
        res.status(400).json(error.toString())
    }
})


exports.router = router;