const express = require("express");
const pool = require("../config");
const Joi = require("joi");

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
console.log(value)

if (rows.length > 0) {

    const message = 'This user is already taken'
    throw new Joi.ValidationError(message, { message })
}

return value
};

const signupSchema = Joi.object({
  email: Joi.string().required().email(),
  mobile: Joi.string().required().pattern(/0[0-9]{9}/),
  fullname: Joi.string().required().max(300),
  password: Joi.string().required().custom(passwordValidator),
  confirm_password: Joi.string().required().valid(Joi.ref('password')),
  sex: Joi.any().allow("male", "female", "no").required(),
  birth: Joi.string().required(),
  username: Joi.string().required().external(usernameValidator),
  ages:Joi.number().required()
  
});

router.post("/user/signup", async function (req, res, next) {

  try {
    await signupSchema.validateAsync(req.body, { aboutEarly: true });
  } catch (err) {

    return res.status(400).json(err);
  }
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  const cus_username = req.body.username
  const cus_password = await bcrypt.hash(req.body.password, 5)
  const cus_name = req.body.fullname
  const cus_email = req.body.email
  const cus_phone = req.body.mobile
  const cus_sex = req.body.sex
  const cus_birthday = req.body.birth
  const cus_age = req.body.ages
  try{
    await conn.query(
      'INSERT INTO customer(cus_name, cus_email, cus_phone, cus_sex, cus_birthday, cus_age) ' +
      'VALUES (?, ?, ?, ?,  ?, ?)',
      [cus_name, cus_email, cus_phone, cus_sex, cus_birthday, cus_age]
      )
      res.status(201).send('ok')
  }catch(err){
    conn.rollback()
    console.log(err)
    res.status(400).json(err.toString());
  }finally{
    conn.release()
  }
});



exports.router = router;
