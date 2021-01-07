"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    fullname: String,
    username: {
      type: String,
      required: true,
    },
  },
  { collection: "userMaster" }
);

module.exports = mongoose.model("user", userSchema);
