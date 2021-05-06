const express = require("express");
const {isLoggedIn} = require('../middlewares');
const pool = require("../config");
router = express.Router();

router.get('/bill', async (req, res, next)=>{
    const conn = await pool.getConnection();
    await conn.beginTransaction();
    try{
        const [send_Ready] = await conn.query("select * from order_detail ")
        res.json(send_Ready)
    }catch(error){
        conn.rollback()
        console.log(err)
        res.status(400).json(err.toString());
    }finally{
        conn.release()
      }
})

exports.router = router;
