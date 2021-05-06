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
  
  router.get('/user/me', isLoggedIn,async (req, res, next) => {
    console.log(req.user + "user index")
    res.json(req.user)
  })
  exports.router = router;