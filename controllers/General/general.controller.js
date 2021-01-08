"use strict";
const response = require("../../lib/response");

// URL: /now Request method: GET Authorisation: not required Response: – timestamp:
// number (current server time) Description: using this method user is able to get current
// server time

module.exports.getTimeStamp = (req, res, next) => {
  try {
    let timeStamp = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    });
    let data = {
      timeStamp: timeStamp,
    };
    response.success(res, 200, data);
  } catch (error) {
    response.failed(res, 404, error);
  }
};

// URL /leaderboard Request method: GET Authorisation: not required Response: – leaders: [{
//   name: "Leader", place: 1, points: 100500 }, { name: "Second user", place: 2, points: 1000 },
//   ...] (10 best players with name, place and amount of points) – current_user_place: 42
//   (OPTIONALLY and only if bearer token provided) Description: Using this method user has
//   ability to get 10 best players (with most amount of points). OPTIONALLY: If bearer token
//   provided server also should return current user's place in the ranking

module.exports.leaderboard = (req, res, next) => {
  try {
    console.log("Hit");
    response.success(res, 200, data);
  } catch (error) {
    response.failed(res, 404, error);
  }
};
