const express = require("express");
const passport = require("passport");
require("../../utils/common/passport");

const { InfoController } = require("../../controllers");
const countryRoutes = require("./country-routes");
const cityRoutes = require("./city-routes");
const userRoutes = require("./user-routes");

const router = express.Router();

router.get("/info", passport.checkAuth, InfoController.info);
router.use("/countries", countryRoutes);
router.use("/cities", cityRoutes);
router.use("/users", userRoutes);

module.exports = router;
