var express = require("express");
var router = express.Router();
let user = require("../../controllers/Dashboard/user.controller");

router.get("/me", function (req, res, next) {});

router.post("/game/play", function (req, res, next) {});

router.post("/game/claim_bonus", function (req, res, next) {});

module.exports = router;
