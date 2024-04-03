const { StatusCodes } = require("http-status-codes");
const { OTPRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { EmailConfig, ServerConfig } = require("../config");

const otpRepository = new OTPRepository();

async function createOTP(data) {
  try {
    const otp = await otpRepository.create(data);
    return otp;
  } catch (error) {
    console.log(error);
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      let explaination = [];
      error.errors.forEach((err) => {
        explaination.push(err.message);
      });
      throw new AppError(explaination, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot Create a new otp Object!",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getOTP(id) {
  try {
    const otp = await otpRepository.get(id);
    return otp;
  } catch (error) {
    if ((error.StatusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("The requested otp not found", error.StatusCode);
    }
  }
}

async function destroyOTP(id) {
  try {
    const response = await otpRepository.destroy(id);
    return response;
  } catch (error) {
    if ((error.StatusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("The requested otp not found", error.StatusCode);
    }
  }
}

async function sendOTP(data) {
  try {
    const response = await EmailConfig.transporter.sendMail({
      from: ServerConfig.GMAIL,
      to: data.email,
      subject: "Email Verification",
      html: data.template,
    });

    return response;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Couldn't send email",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function verifyOTP(data) {}

module.exports = {
  createOTP,
  getOTP,
  destroyOTP,
  sendOTP,
};
