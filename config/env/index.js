// env = undefined
let env;

// here you are checking process.env.NODE_ENV or process.argv[2]
if (process.env.NODE_ENV === "prod" || process.argv[2] === "prod") {
  env = require("./prod.json");
} else if (process.env.NODE_ENV === "uat" || process.argv[2] === "uat") {
  env = require("./uat.json");
} else if (process.env.NODE_ENV === "dev" || process.argv[2] === "dev") {
  env = require("./dev.json");
} else {
  env = require("./local.json");
}

// =============commands example ====================
// process.argv[2]  ----->  cmd    npm start uat
// process.env.NODE_ENV ---->  NODE_ENV=prod npm start

// exporting the environment file to be used
module.exports = env;
