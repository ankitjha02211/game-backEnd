"use strict";
const response = require("../../lib/response");
const userModel = require("../../models/user.model");
const jwt = require("../../lib/jwt_generator");

// URL: /register Request method: POST Authorisation: not required Request body: – name:
// string (user's name) Response: – token: string (user's bearer token, which will be used to
// authorise user) Description: using this method user can be registered in the system provided
// name (name should be unique) and get authorisation token. This token will be used to
// access API endpoints which require authorisation
module.exports.register = async (req, res, next) => {
  try {
    let name = String(req.body.name);
    let valid1 = name.length > 0;
    if (valid1) {
      let valid2 = await userModel.find({ name: name });
      if (valid2.length == 0) {
        let user = new userModel({
          name,
          points: 0,
        });
        user.save((err, result) => {
          if (err) {
            response.failed(res, 404, err);
          } else {
            let obj = { name };
            obj.Token = jwt.accessToken(obj);
            response.success(res, 200, obj);
          }
        });
      } else {
        throw new Error("Username Already Exists");
      }
    } else {
      throw new Error("Username is not valid");
    }
  } catch (error) {
    response.failed(res, 404, error);
  }
};
