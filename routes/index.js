var express = require("express");
var router = express.Router();
let auth = require("./auth/auth.routes");
let user = require("./user/user.routes");
let general = require("./general/general.routes");

/* GET home page. */
router.use("/auth", auth);
router.use("/user", user);
router.use("/general", general);

module.exports = router;
