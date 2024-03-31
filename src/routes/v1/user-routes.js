const express = require("express");
const passport = require("passport");

const router = express.Router();

const { UserController } = require("../../controllers");
const { UserMiddlewares } = require("../../middlewares");
require("../../utils/common/passport");

router.post(
  "/signup",
  UserMiddlewares.validateAuthRequest,
  UserController.signup
);

router.post(
  "/signin",
  UserMiddlewares.validateAuthRequest,
  UserController.signin
);

router.get("/:id", UserController.getUser);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    successRedirect: "/",
  })
  // function (req, res) {
  //   console.log(req.user);
  //   console.log(req.isAuthenticated());
  //   // Successful authentication, redirect home.
  //   res.send("done");
  // }
);

router.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", {
    scope: ["openid", "email", "profile"],
  })
);

router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", { session: false }),
  function (req, res) {
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.send("done");
  }
);

module.exports = router;
