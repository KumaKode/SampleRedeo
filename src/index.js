const express = require("express");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static/index.html"));
});

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log("Sucessfully started");
  Logger.info("Successfully started the server");
});
