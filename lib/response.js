"use strict";

module.exports.success = (res, statusCode, data) => {
  let body = {
    statusCode: statusCode,
    data: data,
  };
  res.status(statusCode).json(body);
};

module.exports.failed = (res, statusCode, error) => {
  let errorStatement = error.message ? error.message : "error";
  let body = {
    statusCode: statusCode,
    error: errorStatement,
  };
  res.status(statusCode).json(body);
};
