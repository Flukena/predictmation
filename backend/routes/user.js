const express = require("express");
const pool = require("../config");
const Joi = require("joi");
const { generateToken } = require("../utils/token");
const {isLoggedIn} = require('../middlewares')
router = express.Router();
const bcrypt = require("bcrypt");

const passwordValidator = (value, helpers) => {
  if (value.length < 8) {
    throw new Joi.ValidationError(
      "Password must contain at least 8 characters"
    );
  }
  if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
    throw new Joi.ValidationError("Password must be harder");
  }
  return value;
};

const usernameValidator = async (value, helpers) => {
  const [rows, _] = await pool.query(
    "SELECT cus_username FROM sql_cafe.cus_user WHERE cus_username = ?",
    [value]
)

if (rows.length > 0) {

    const message = 'This user is already taken'
    throw new Joi.ValidationError(message, { message })
}

return value
};

const signupSchema = Joi.object({
  email: Joi.string().required().email(),
  mobile: Joi.string().required().pattern(/0[0-9]{9}/),
  firstname: Joi.string().required().max(150),
  lastname: Joi.string().required().max(150),
  password: Joi.string().required().custom(passwordValidator),
  confirm_password: Joi.string().required().valid(Joi.ref('password')),
  sex: Joi.any().allow("male", "female", "no").required(),
  birth: Joi.string().required(),
  username: Joi.string().required().external(usernameValidator),
  age:Joi.number().required()
  
});
// async function  updateUser(cus_username, cus_password, cus_id){
//   const conn = await pool.getConnection();
//   await conn.beginTransaction();
//   try{
//     res.status(200).send('ok')
//     updateUser(cus_username, cus_password, cus_id)

//     conn.commit()
//   }catch(err){
//     conn.rollback()
//     console.log(err)
//     res.status(400).json(err.toString());
//   }finally{
//     conn.release()
//   }
// }
router.post("/user/singup", async function (req, res, next) {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    await signupSchema.validateAsync(req.body, { aboutEarly: true });
    
  } catch (err) {
    console.log(err)
    return res.status(400).json(err);
  }

  const cus_username = req.body.username
  const cus_password = await bcrypt.hash(req.body.password, 5)
  const cus_firstname = req.body.firstname
  const cus_lastname = req.body.lastname
  const cus_email = req.body.email
  const cus_phone = req.body.mobile
  const cus_sex = req.body.sex
  const cus_birthday = req.body.birth
  const cus_age = req.body.age
  try{
    await conn.query(
      'INSERT INTO customer(cus_firstname, cus_lastname, cus_email, cus_phone, cus_sex, cus_birthday, cus_age) ' +
      'VALUES (?, ?, ?, ?, ?,  ?, ?)',
      [cus_firstname, cus_lastname, cus_email, cus_phone, cus_sex, cus_birthday, cus_age]
      )
      const cus_id = await conn.query('select cus_id from customer where cus_email = ?',[cus_email])
      await conn.query('INSERT INTO cus_user(cus_username, cus_password, cus_id)' + 'VALUES(?,?,?)', [cus_username, cus_password, cus_id[0][0].cus_id])

      res.status(200).send('ok')

      conn.commit()
  }catch(err){
    conn.rollback()
    console.log(err)
    res.status(400).json(err.toString());
  }finally{
    conn.release()
  }
});
const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
})

router.post('/user/login', async (req, res, next)=> {
  try{
    await loginSchema.validateAsync(req.body, {abortEarly:false})
  }catch(err){
    console.log(error)
    return res.status(400).send(err)
    
  }
  const username = req.body.username
  const password = req.body.password

  const conn = await pool.getConnection()
  await conn.beginTransaction()
  
  try{
   const [[user]] = await conn.query('SELECT * FROM cus_user WHERE cus_username=?', [username])
    if(!user){
      throw new Error('Incorrect username or password')
    }
    if (!(await bcrypt.compare(password, user.cus_password))){
      throw new Error('Incorrent username or password')
    }
    const [tokens] = await conn.query(
      'SELECT * FROM tokens WHERE user_id=?', 
      [user.cus_id]
  )
    let token = tokens[0]?.token 
    if(!token){
      token = generateToken()
      console.log(user.cus_id)
      await conn.query('INSERT INTO tokens(user_id, token) VALUES (?, ?)', [user.cus_id, token])
    }
    conn.commit()
    res.status(200).json({'token' : token})
  }catch(error){
    console.log(error)

    conn.rollback()
    res.status(400).json(error.toString())
  }finally{
    conn.release()
  }

});

router.get('/user/me', async (req, res, next) => {
  res.json(req.user)
})
exports.router = router;
