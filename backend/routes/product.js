const express = require("express");
const pool = require("../config");
const {isLoggedIn} = require('../middlewares');
router = express.Router();

router.get("/product", async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
        const product_list = await conn.query('SELECT * FROM product')
        res.json(product_list[0])
    }catch(error){
        console.log("Product : " + error)
    }
} )

exports.router = router;