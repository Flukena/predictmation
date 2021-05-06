const express = require("express");
const {isLoggedIn} = require('../middlewares');
const pool = require("../config");
router = express.Router();
const nodemailer = require('nodemailer');

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
    // console.log(req.body)
    const bills = req.body.bills
    const select = req.body.select
    console.log(bills, select)
    let email = ''
    let product_name = ''
    try{

    for(var i = 0; i < select.length;i++ ){

        for(var j = 0; j < bills.length;j++){
            if(select[i] == bills[j].order_d_id)
            email = bills[j].cus_email
            product_name = bills[j].product_name
        }
            console.log(email)

            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: { // ข้อมูลการเข้าสู่ระบบ
                  user: 'thecoffee172352@gmail.com', // email user ของเรา
                  pass: 'non172352' // email password
                }
               });
               // เริ่มทำการส่งอีเมล
               let info = await transporter.sendMail({
               from: `"The Coffee " <${email}>`, // อีเมลผู้ส่ง
               to: `${email}`, // อีเมลผู้รับ สามารถกำหนดได้มากกว่า 1 อีเมล โดยขั้นด้วย ,(Comma)
               subject: 'The Coffee', // หัวข้ออีเมล
               html: "สินค้าที่ท่านเสร็จเรียบร้อย ท่านสามารถมารับสินค้า ได้ที่ The Coffee Shop <br> รายการคือ " +product_name  // html body
               });
               // log ข้อมูลการส่งว่าส่งได้-ไม่ได้
               console.log('Message sent: %s', info.messageId);
            conn.query('update order_detail set ready = ? where order_d_id = ?', [1,select[i]])
    }
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
