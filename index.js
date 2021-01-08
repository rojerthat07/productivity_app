const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv/config"); //dotenv allows you to separate secrets from your source code.

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/";
const DATABASE = process.env.DATABASE || "productivty_app__db";
const ATLAS_DB = process.env.ATLAS_DB;

//Routes imports
const todos = require("./api/todos");
const users = require("./api/users");
//Routes Middleware
app.use("/api/todos", todos);
app.use("/api/users", users);

app.use(express.static(path.join(__dirname, "./dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

mongoose
  .connect(`${ATLAS_DB}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => console.log(err));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Application listening to PORT: ${PORT}`);
});
