const express = require("express");
const router = express.Router();

const { CountryController } = require("../../controllers");

router.post("/", CountryController.createCountry);

router.get("/", CountryController.getCountry);

router.get("/:id", CountryController.getCountries);

router.delete("/:id", CountryController.destroyCountry);

router.patch("/:id", CountryController.updateCountry);

module.exports = router;
