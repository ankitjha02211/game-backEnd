var jwt = require("jsonwebtoken");
let env = require("../config/env/index");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied");
  try {
    var decoded = jwt.verify(token, env.jwtSec);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
