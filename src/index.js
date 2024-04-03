const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const path = require("path");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: ServerConfig.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", apiRoutes);

app.use("/static", express.static(path.join(__dirname, "static")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

app.listen(ServerConfig.PORT, () => {
  console.log("Sucessfully started");
  console.log(`Listening on port ${ServerConfig.PORT}`);
  Logger.info("Successfully started the server");
});
