'use strict';
const nodemailer = require('nodemailer');
// async..await is not allowed in global scope, must use a wrapper
<<<<<<< Updated upstream
 async function mailer(email) {
=======
export async function mailer(email) {
>>>>>>> Stashed changes
// สร้างออปเจ็ค transporter เพื่อกำหนดการเชื่อมต่อ SMTP และใช้ตอนส่งเมล
console.log(email + "test")
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
from: '"Fred Foo 👻" <flukgoza@gmail.com>', // อีเมลผู้ส่ง
to: 'flukgoza@gmail.com', // อีเมลผู้รับ สามารถกำหนดได้มากกว่า 1 อีเมล โดยขั้นด้วย ,(Comma)
subject: 'Hello ✔', // หัวข้ออีเมล
text: 'Hello world?', // plain text body
html: '<b>Hello world?</b>' // html body
});
// log ข้อมูลการส่งว่าส่งได้-ไม่ได้
console.log('Message sent: %s', info.messageId);
}

<<<<<<< Updated upstream
mailer().catch(console.error);
=======
main().catch(console.error);
>>>>>>> Stashed changes
