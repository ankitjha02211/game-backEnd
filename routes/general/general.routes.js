var express = require("express");
var router = express.Router();
let general = require("../../controllers/General/general.controller");

router.get("/now", function (req, res, next) {
  console.log("/now");
});

router.get("/leaderboard", function (req, res, next) {
  console.log("/leaderboard");
});

module.exports = router;
