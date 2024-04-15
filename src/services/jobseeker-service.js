const { StatusCodes } = require("http-status-codes");

const { JobSeekerRepository } = require("../repositories");
const { UsersService } = require("../services");
const AppError = require("../utils/errors/app-error");
const { Auth } = require("../utils/common");

const jobSeekerRepository = new JobSeekerRepository();

async function signUp(data) {
  try {
    const user = await UsersService.createUser(data, type);
    const jobSeeker = jobSeekerRepository.create(data);
    return jobSeeker;
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
      "Cannot create new user",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function signIn(data) {
  try {
    const user = await usersRepository.getUserByEmail(data.email);
    if (!user) {
      throw new AppError("Not able to find the user", StatusCodes.NOT_FOUND);
    }
    const password = Auth.matchPassword(data.password, user.password);
    if (!password) {
      throw new AppError("Invalid password", StatusCodes.BAD_REQUEST);
    }
    const jwt = Auth.createToken({ id: user.id, email: user.email });
    return jwt;
  } catch (error) {
    console.log(error);
    if (error instanceof AppError) throw error;
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getUser(id) {
  try {
    const user = await usersRepository.get(id);
    return user;
  } catch (error) {
    console.log(error);
    if ((error.StatusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("The requested user not found", error.StatusCode);
    }
  }
}

async function isAuthenticated(token) {
  try {
    if (!token) {
      throw new AppError("No JWT token found", StatusCodes.BAD_REQUEST);
    }
    const response = Auth.verifyToken(token);
    const user = await usersRepository.get(response.id);
    if (!user) {
      throw new AppError("No user found", StatusCodes.BAD_REQUEST);
    }
    return user.id;
  } catch (error) {
    console.log(error);
    if (error instanceof AppError) throw error;
    if (error.name === "JsonWebTokenError") {
      throw new AppError("Invalid JWT Token", StatusCodes.BAD_REQUEST);
    }
    if (error.name === "TokenExpiredError") {
      throw new AppError("JWT Token Expired", StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function isAdmin(id) {
  console.log(id);
  try {
    const user = await usersRepository.get(id);

    if (!user) {
      throw new AppError(
        "No user found for the given id",
        StatusCodes.NOT_FOUND
      );
    }

    const admin = await roleRepository.getRoleByName("admin");

    if (!admin) {
      throw new AppError(
        "No user found for the given role",
        StatusCodes.NOT_FOUND
      );
    }

    return user.hasRole(admin);
  } catch (error) {
    console.log(error);
    if (error instanceof AppError) throw error;
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function isFlightCompany(id) {
  try {
    const user = await usersRepository.get(id);

    if (!user) {
      throw new AppError(
        "No user found for the given id",
        StatusCodes.NOT_FOUND
      );
    }

    const flight_company = await roleRepository.getRoleByName("flight_company");

    if (!flight_company) {
      throw new AppError(
        "No user found for the given roles",
        StatusCodes.NOT_FOUND
      );
    }

    const admin = await isAdmin(id);
    const company = await user.hasRole(flight_company);

    return [admin, company];
  } catch (error) {
    console.log(error);
    if (error instanceof AppError) throw error;
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  signUp,
  signIn,
  getUser,
  isAuthenticated,
  addRoleToUser,
  isAdmin,
  isFlightCompany,
};
