const express = require("express");
const cors = require("cors");
const logRoutes = require("./middleware/logger");
const mongoose = require("mongoose");
const userRouter = require("./routers/user");
const session = require("express-session");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.set("trust proxy", 1);
app.use(express.json());
app.use(logRoutes);

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    // genid: function (req) {
    //   return genuuid(); // use UUIDs for session IDs
    // },
    secret: "AlexAndHarry",
    cookie: {
      maxAge: 3600000,
      expires: new Date(Date.now() + 3600000),
      sameSite: "lax",
      // httpOnly: false,
      secure: false,
    },
  })
);

app.get("/", (req, res) => {
  res.json({
    greeting:
      "Welcome to the world of pokémon! My name is Oak! People call me the pokémon Prof! This world is inhabited by creatures called pokémon!",
  });
});

app.use("/users", userRouter);

module.exports = app;
