const express = require("express");
const passport = require("passport");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();

const { UserController } = require("../../controllers");
const { UserMiddlewares } = require("../../middlewares");
const { ErrorResponse, SuccessResponse } = require("../../utils/common");
require("../../utils/common/passport");

router.post("/signin/google", UserController.signin);
router.post("/signin/linkedin", UserController.signin);

router.post(
  "/signin",
  UserMiddlewares.validateAuthRequest,
  UserController.signin
);

//router.get("/:id", UserController.getUser);

router.post("/verify/mail", passport.checkAuth, UserController.verifyEmail);

router.get("/profile", passport.checkAuth, (req, res) => {
  try {
    console.log(req.user);
    SuccessResponse.data = req.user;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
});

module.exports = router;
