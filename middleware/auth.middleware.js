var jwt = require("jsonwebtoken");
//let env = require("../config/env/index");
let checkToken = require("../lib/jwt_generator").checkToken;

module.exports = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).send("Access denied");
  try {
    var decoded = checkToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
