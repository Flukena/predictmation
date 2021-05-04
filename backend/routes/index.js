const express = require("express");
const pool = require("../config");
<<<<<<< Updated upstream
const {isLoggedIn} = require('../middlewares')
// const mailer = require('../nodejs-mailer')
=======
import {mailer} from '../nodejs-mailer'

const {isLoggedIn} = require('../middlewares')
>>>>>>> Stashed changes
router = express.Router();
router.get('/user/me', isLoggedIn, async (req, res, next) => {
        res.json(req.user)
    })

router.get("/", async function (req, res, next) {
  try {
<<<<<<< Updated upstream
=======
    mailer.mailer("flukgoza@gmail.com")
>>>>>>> Stashed changes

    return res.json('Home');
  } catch (err) {
    return res.status(500).json(err)
  }
});

<<<<<<< Updated upstream
router;
=======

exports.router = router;
>>>>>>> Stashed changes
