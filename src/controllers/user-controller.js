const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { ServerConfig } = require("../config");

async function signin(req, res) {
  try {
    const response = await UserService.signin({
      name: req.body.given_name || "",
      email: req.body.email,
      password:
        req.body.password ||
        bcrypt.hashSync(req.body.sub, +ServerConfig.SALT_ROUNDS),
      socialLogin: req.body.socialLogin || "Local",
      profilePicture: req.body.picture || "",
    });
    SuccessResponse.data = response;
    return res.status(StatusCodes.CREATED).send(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ErrorResponse);
  }
}

async function getUser(req, res) {
  try {
    const user = await UserService.getUser(req.params.id);
    SuccessResponse.data = user;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  signin,
  getUser,
};
