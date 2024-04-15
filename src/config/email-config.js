const nodemailer = require("nodemailer");

const ServerConfig = require("./server-config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  type: "SMTP",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: ServerConfig.GMAIL,
    pass: ServerConfig.GPASS,
  },
});

module.exports = {
  transporter,
};
