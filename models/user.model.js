"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    points: { type: Number },
  },
  { collection: "userMaster" }
);

module.exports = mongoose.model("user", userSchema);
