const express = require("express");
const passport = require("passport");
const router = express.Router();

const { UserController } = require("../../controllers");
const { UserMiddlewares } = require("../../middlewares");
const { Auth } = require("../../utils/common");
require("../../utils/common/passport");

router.post(
  "/signup",
  UserMiddlewares.validateAuthRequest,
  UserController.signup
);

// router.post(
//   "/signin/google",
//   UserMiddlewares.validateAuthRequest,
//   UserController.signup
// );

router.post(
  "/signin",
  UserMiddlewares.validateAuthRequest,
  UserController.signin
);

//router.get("/:id", UserController.getUser);

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "consent",
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    const token = Auth.createToken({ user: req.user });
    res.cookie("jwtToken", token);
    res.redirect("http://localhost:5173");
  }
);

router.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", {
    scope: ["openid", "email", "profile"],
  })
);

router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin"),
  function (req, res) {
    const token = Auth.createToken({ user: req.user });
    res.cookie("jwtToken", token);
    res.redirect("http://localhost:5173");
  }
);

router.get("/profile", passport.checkAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
