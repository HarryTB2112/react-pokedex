const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const Cookies = require("cookies");
const dayjs = require("dayjs");
const express = require("express");

/* REGISTER USER */
const register = async (req, res) => {
  try {
    const { body } = req;
    console.log(body);

    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
    const passwordHash = await bcrypt.hash(body.password, salt);

    const newUser = await User.createUser(body, passwordHash);

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(username, password);
    const user = await User.findOneByUsername(username);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: 600 }
    );

    req.session.token = accessToken;
    req.session.name = username;
    console.log(req.session);

    res.status(200).send({
      auth: true,
      id: user._id,
      token: accessToken,
      username: user.username,
      // pokemon: user.pokemon
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const logout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).send("unable to log out");
      } else {
        res.send("successful logout");
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

checkAuth = async (req, res) => {
  try {
    res.send({ auth: true, user: req.user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, checkAuth, logout };
