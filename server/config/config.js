import dotenv from "dotenv";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: "../.env.production" });
} else {
  dotenv.config();
}

const config = {
  PORT: process.env.PORT || 4000,
};

export default config;
