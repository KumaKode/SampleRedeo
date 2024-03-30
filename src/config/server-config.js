const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALL_BACK_URL: process.env.GOOGLE_CALL_BACK_URL,
  LINKEDIN_KEY: process.env.LINKEDIN_KEY,
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET,
  LINKEDIN_CALL_BACK_URL: process.env.LINKEDIN_CALL_BACK_URL,
};
