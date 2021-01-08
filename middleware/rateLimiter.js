const rateLimit = require("express-rate-limit");

const apiAcess = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: "please play again after an hour",
});

module.exports = apiAcess;
