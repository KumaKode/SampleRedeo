const { CountryService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createCountry(req, res) {
  try {
    const city = await CountryService.createCountry({
      name: req.body.name,
      countryCode: req.body.countryCode,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getCountries(req, res) {
  try {
    const airplanes = await CountryService.getCountries();
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getCountry(req, res) {
  try {
    const city = await CountryService.getCountry(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destroyCountry(req, res) {
  try {
    const response = await CountryService.destroyCountry(req.params.id);
    SuccessResponse.data = response;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateCountry(req, res) {
  try {
    const city = await CountryService.updateCountry(req.params.id, req.body);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCountry,
  getCountries,
  getCountry,
  destroyCountry,
  updateCountry,
};
