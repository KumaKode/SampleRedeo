const CrudRepository = require("./crud-repository");
const { OTP } = require("../models");

class OTPRepository extends CrudRepository {
  constructor() {
    super(OTP);
  }

  async getOTP(otp) {
    const response = await OTP.findOne({ where: { otp: otp } });
    return response;
  }
}

module.exports = OTPRepository;
