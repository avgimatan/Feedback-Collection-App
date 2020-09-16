if (process.env.NODE_ENV === "production") {
  // we are in production - return set of keys for production.
  module.exports = require("./prod");
} else {
  // we are in develompent - return the dev keys.
  module.exports = require("./dev");
}
