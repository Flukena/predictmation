const express = require("express");

router = express.Router();


router.get("/", async function (req, res, next) {
  try {
    return res.json('Home');
  } catch (err) {
    return res.status(500).json(err)
  }
});


exports.router = router;
