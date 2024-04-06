const express = require("express");
const passport = require("passport");
const router = express.Router();

const { UserController } = require("../../controllers");
const { UserMiddlewares } = require("../../middlewares");
require("../../utils/common/passport");

router.post("/signin/google", UserController.signin);
router.post("/signin/linkedin", UserController.signin);

router.post(
  "/signin",
  UserMiddlewares.validateAuthRequest,
  UserController.signin
);

//router.get("/:id", UserController.getUser);

router.get("/profile", passport.checkAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
