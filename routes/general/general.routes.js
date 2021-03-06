var express = require("express");
var router = express.Router();
let general = require("../../controllers/General/general.controller");

router.get("/now", function (req, res, next) {
  general.getTimeStamp(req, res, next);
});

router.get("/leaderboard", function (req, res, next) {
  general.leaderboard(req, res, next);
});

module.exports = router;
