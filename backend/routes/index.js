const express = require("express");
const pool = require("../config");
const {isLoggedIn} = require('../middlewares')

router = express.Router();

router.get('/user/me', isLoggedIn, async (req, res, next) => {
        res.json(req.user)
    })

router.get("/", async function (req, res, next) {
  try {
    return res.json('Home');
  } catch (err) {
    return res.status(500).json(err)
  }
});



exports.router = router;