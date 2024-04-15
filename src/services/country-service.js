const { StatusCodes } = require("http-status-codes");
const { CountryRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const coutryRepository = new CountryRepository();

async function createCountry(data) {
  try {
    const country = await coutryRepository.create(data);
    return country;
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
      "Cannot Create a new Country Object!",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCountries() {
  try {
    const airplanes = await coutryRepository.findAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the Countries",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCountry(id) {
  try {
    const country = await coutryRepository.get(id);
    return country;
  } catch (error) {
    if ((error.StatusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("The requested country not found", error.StatusCode);
    }
  }
}

async function destroyCountry(id) {
  try {
    const response = await coutryRepository.destroy(id);
    return response;
  } catch (error) {
    if ((error.StatusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("The requested country not found", error.StatusCode);
    }
  }
}

async function updateCountry(id, data) {
  try {
    const country = await coutryRepository.update(id, data);
    return country;
  } catch (error) {
    console.log(error);
    if ((error.StatusCode = StatusCodes.NOT_FOUND)) {
      throw new AppError("The requested country not found", error.StatusCode);
    }
  }
}

module.exports = {
  createCountry,
  getCountries,
  getCountry,
  destroyCountry,
  updateCountry,
};
