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
    updated_at: { type: Date, default: Date.now },
  },
  { collection: "userMaster" }
);

module.exports = mongoose.model("user", userSchema);
