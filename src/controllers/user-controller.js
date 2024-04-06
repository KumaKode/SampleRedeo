const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const { ServerConfig } = require("../config");
const axios = require("axios");

async function signin(req, res) {
  try {
    if (req.body.code) {
      const profile = await getLinkedinProfile(req.body.code);
      const response = await UserService.signin({
        name: profile.given_name,
        email: profile.email,
        password: bcrypt.hashSync(profile.sub, +ServerConfig.SALT_ROUNDS),
        socialLogin: "Linkedin",
        profilePicture: profile.picture,
      });
      SuccessResponse.data = response;
      return res.status(StatusCodes.CREATED).send(SuccessResponse);
    }

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

async function getLinkedinProfile(code) {
  try {
    const response = await axios.post(
      "https://www.linkedin.com/oauth/v2/accessToken",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://localhost:5173",
        client_id: process.env.LINKEDIN_KEY,
        client_secret: process.env.LINKEDIN_SECRET,
        scope: "profile email openid",
      })
    );
    const access_token = response.data.access_token;
    const url = "https://api.linkedin.com/v2/userinfo";

    const userprofile = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    console.log(userprofile.data);
    return userprofile.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
}

async function verifyEmail(req, res) {
  try {
    const user = await UserService.verifyEmail({
      id: req.body.id,
      otp: req.body.otp,
    });
    SuccessResponse.data = user;
    SuccessResponse.message = "Email verified successfully!";
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
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
  verifyEmail,
};
