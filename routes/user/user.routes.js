var express = require("express");
var router = express.Router();
let user = require("../../controllers/Dashboard/user.controller");
let authMiddleware = require("../../middleware/auth.middleware");

router.get("/me", authMiddleware, function (req, res, next) {
  user.profile(req, res, next);
});

router.post("/game/play", authMiddleware, function (req, res, next) {
  user.gamePlay(req, res, next);
});

router.post("/game/claim_bonus", authMiddleware, function (req, res, next) {
  user.claimBonus(req, res, next);
});

module.exports = router;
