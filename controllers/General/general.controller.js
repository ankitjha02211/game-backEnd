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
