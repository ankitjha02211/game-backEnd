var express = require("express");
var router = express.Router();
let path1 = require("./sub_Routes/main.routes");
let path2 = require("./sub_Routes/main.routes");
let path3 = require("./sub_Routes/main.routes");

/* GET home page. */
router.use("/auth", path1);
router.use("/user", path2);
router.use("/general", path3);

module.exports = router;
