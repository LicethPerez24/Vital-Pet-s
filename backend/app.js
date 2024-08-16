const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const vetController = require("./controllers/vetController");

app.use(express.urlencoded({ extended: true }));
app.use(cors());

let data = {};

app.get("/contacto/success", (req, res) => {
  res.status(200).json({ data: data });
});

app.post("/contacto/success", vetController.sendMessagePost);

app.listen(process.env.PORT, () =>
  console.log(`listen to ${process.env.PORT}`),
);
