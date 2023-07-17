const express = require("express");
const cors = require("cors");
const logRoutes = require("./middleware/logger");
const mongoose = require("mongoose");
const userRouter = require("./routers/user");
const cookieParser = require("cookie-parser");
const app = express();

// app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(logRoutes);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({
    greeting:
      "Welcome to the world of pokémon! My name is Oak! People call me the pokémon Prof! This world is inhabited by creatures called pokémon!",
  });
});

app.use("/users", userRouter);

module.exports = app;
