const { StatusCodes } = require("http-status-codes");

const { UserRepository, TypeRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { Auth } = require("../utils/common");

const userRepository = new UserRepository();
const typeRepository = new TypeRepository();

async function signup(data) {
  try {
    const user = await userRepository.create(data);
    const type = await typeRepository.getTypeByName("jobSeeker");
    user.addType(type);
    return user;
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

async function signin(data) {
  try {
    const user = await userRepository.getUserByEmail(data.email);
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
    const user = await userRepository.get(id);
    return user;
  } catch (error) {
    console.log(error);
    if ((error.StatusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("The requested user not found", error.StatusCode);
    }
  }
}

// async function isAuthenticated(token) {
//   try {
//     if (!token) {
//       throw new AppError("No JWT token found", StatusCodes.BAD_REQUEST);
//     }
//     const response = Auth.verifyToken(token);
//     console.log(response);
//     const user = await userRepository.get(response.id);
//     if (!user) {
//       throw new AppError("No user found", StatusCodes.BAD_REQUEST);
//     }
//     return user.id;
//   } catch (error) {
//     console.log(error);
//     if (error instanceof AppError) throw error;
//     if (error.name === "JsonWebTokenError") {
//       throw new AppError("Invalid JWT Token", StatusCodes.BAD_REQUEST);
//     }
//     if (error.name === "TokenExpiredError") {
//       throw new AppError("JWT Token Expired", StatusCodes.BAD_REQUEST);
//     }
//     throw new AppError(
//       "Something went wrong",
//       StatusCodes.INTERNAL_SERVER_ERROR
//     );
//   }
// }

async function isAdmin(id) {
  console.log(id);
  try {
    const user = await userRepository.get(id);

    if (!user) {
      throw new AppError(
        "No user found for the given id",
        StatusCodes.NOT_FOUND
      );
    }

    const admin = await typeRepository.getTypeByName("admin");

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

async function isEmployer(id) {
  try {
    const user = await userRepository.get(id);

    if (!user) {
      throw new AppError(
        "No user found for the given id",
        StatusCodes.NOT_FOUND
      );
    }

    const employer = await typeRepository.getTypeByName("employer");

    if (!employer) {
      throw new AppError(
        "No user found for the given roles",
        StatusCodes.NOT_FOUND
      );
    }

    const admin = await isAdmin(id);
    const emp = await user.hasRole(employer);

    return [admin, emp];
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
  signup,
  signin,
  getUser,
  // isAuthenticated,
  isAdmin,
  isEmployer,
};
