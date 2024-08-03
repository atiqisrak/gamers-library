const session = require("express-session");
require("dotenv").config();

module.exports = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: process.env.SESSION_TIMEOUT, // session max age in milliseconds
    secure: process.env.NODE_ENV === "production", // only set cookies over https in production
    httpOnly: true, // prevents client-side JS from reading the cookie
  },
});
