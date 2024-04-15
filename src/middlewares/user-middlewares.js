const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { UserService } = require("../services");

function validateAuthRequest(req, res, next) {
  if (!req.body.email) {
    ErrorResponse.message = "Something went wrong while creating the user";
    ErrorResponse.error = new AppError(
      ["email not found in the incoming request"],
      StatusCodes.BAD_REQUEST
    );
  }
  if (!req.body.password) {
    ErrorResponse.message = "Something went wrong while creating the user";
    ErrorResponse.error = new AppError(
      ["password not found in the incoming request"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

// async function chekAuth(req, res, next) {
//   console.log(req.headers["x-access-token"]);
//   try {
//     const response = await UserService.isAuthenticated(
//       req.headers["x-access-token"]
//     );
//     console.log(response);
//     if (response) {
//       req.user = response;
//       next();
//     }
//   } catch (error) {
//     return res.status(error.statusCode).json(error);
//   }
// }

module.exports = {
  validateAuthRequest,
  // chekAuth,
};
