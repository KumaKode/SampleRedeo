import express from "express";
import cors from "cors";
import config from "./config/config.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Job Portal!");
});

app.listen(config.PORT, () => {
  console.log(`Server Listening on port at http://localhost:${config.PORT}`);
});
