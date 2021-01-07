var express = require("express");
var router = express.Router();
let auth = require("../../controllers/Auth/auth.controller");

router.post("/register", function (req, res, next) {
  console.log("/register");
});

module.exports = router;
