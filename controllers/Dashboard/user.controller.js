"use strict";
const response = require("../../lib/response");
const userModel = require("../../models/user.model");

// URL: /me Request method: GET Authorisation: Bearer token Response: – name: string
// (user's name) – points: number (user's points) Description: using this method user can get
// information about himself (name and amount of points)

module.exports.profile = async (req, res, next) => {
  try {
    let name = req.user.data.name;
    let data = await userModel
      .find({ name: name }, { name: 1, points: 1 })
      .lean();
    if (data.length == 1) {
      response.success(res, 200, data);
    } else {
      throw new Error("Error while retrieving data");
    }
  } catch (error) {
    response.failed(res, 404, error);
  }
};

// URL: /game/play Request method: POST Authorisation: Bearer token Response: -
// points_added: number (amount of points added to the user's balance) – points_total:
// number (total amount of points of the current user) Description: Using this method user is
// able to add random number of points (from 1 to 100, generated on server) to his balance.
// During every hour (e.g. from 11:00 until 12:00 server time) user can play no more than 5
// times. For example: First request at 11:05 – OK Second request at 11:06 – OK Third request
// at 11:20 – OK Forth request at 11:40 – OK Fifth request at 11:4

module.exports.gamePlay = async (req, res, next) => {
  try {
    let points = Math.floor(Math.random() * 101);
    let name = req.user.data.name;
    let data = await userModel.find({ name: name }, { name: 1, points: 1 });
    if (data.length == 1) {
      let total_points = data[0].points + points;
      await userModel.updateOne(
        { name: name },
        { $set: { points: total_points } }
      );
      let result = { points_added: points, points_total: total_points };
      response.success(res, 200, result);
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    response.failed(res, 404, error);
  }
};

// URL /game/claim_bonus Request method: POST Authorisation: Bearer token Response: –
// points_added: number (amount of points added to the user's balance) – points_total:
// number (total amount of points of the current user) Description: for every minute after date
// of registration or date of the last bonus claim user has ability to get 10 extra points.
// Maximum amount of points which user can get for 1 claim request is limited by 100.

module.exports.claimBonus = async (req, res, next) => {
  try {
    let name = req.user.data.name;
    let data = await userModel.find({ name: name });
    if (data.length == 1) {
      let points = Math.floor(differenceCalculator(data[0].updated_at));
      let total_points = data[0].points + points;
      if (points > 0) {
        let newDate = new Date();
        await userModel.updateOne(
          { name: name },
          { $set: { points: total_points, updated_at: newDate } }
        );
        let result = { points_added: points, points_total: total_points };
        response.success(res, 200, result);
      } else {
        throw new Error("Please claim after 1 min");
      }
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    response.failed(res, 404, error);
  }
};

let differenceCalculator = (last) => {
  let lastDate = new Date(last).getTime();
  let currentDate = new Date().getTime();
  let diff = Math.floor((currentDate - lastDate) / (60 * 1000));
  if (diff > 0 && diff < 10) {
    return diff * 10;
  } else if (diff >= 10) {
    return 100;
  } else {
    return 0;
  }
};
