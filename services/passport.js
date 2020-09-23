const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// take the user model and put into cookie with the mongo id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// turn the cookie into legit user in the future
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// init the google auth
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // there is a user with this profile id
        return done(null, existingUser);
      }
      // not exist, create new user and save into DB
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
