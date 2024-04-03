const CrudRepository = require("./crud-repository");
const { OTP } = require("../models");

class OTPRepository extends CrudRepository {
  constructor() {
    super(OTP);
  }
}

module.exports = OTPRepository;
