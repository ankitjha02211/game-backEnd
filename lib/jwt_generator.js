"use strict";

let jwt = require("jsonwebtoken");
let env = require("../config/env/index");

// generating access token
module.exports.accessToken = (jwtD) => {
  let jwtData = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: jwtD,
    },
    env.jwtSec
  );
  return jwtData;
};

module.exports.checkToken = (jwtD) => {
  let data = jwt.verify(jwtD, env.jwtSec);
  return data;
};
