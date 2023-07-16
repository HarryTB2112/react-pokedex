const mongoose = require("mongoose");

const userIds = [new mongoose.Types.ObjectId()];

const pokemon = [
  {
    _id: 6,
    userId: userIds[0],
    name: "Charizard",
    moves: [
      { name: "mega-punch" },
      { name: "fire-punch" },
      { name: "cut" },
      { name: "body-slam" },
      { name: "wing-attack" },
      { name: "ember" },
    ],
    ability: "blaze",
    held_item: "charcoal",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/6.png",
    stats: [
      {
        name: "level",
        level_value: 87,
      },
      {
        base_stat: 78,
        stat_value: 124,
        name: "hp",
      },
      {
        base_stat: 84,
        stat_value: 124,
        name: "attack",
      },
      {
        base_stat: 78,
        stat_value: 124,
        name: "defense",
      },
      {
        base_stat: 109,
        stat_value: 124,
        name: "special-attack",
      },
      {
        base_stat: 85,
        stat_value: 124,
        name: "special-defense",
      },
      {
        base_stat: 100,
        stat_value: 124,
        name: "speed",
      },
    ],
    types: [
      {
        slot1: "fire",
      },
      {
        slot2: "flying",
      },
    ],
    weight: "905",
  },
];

const users = [
  {
    _id: userIds[0],
    username: "stinkyAl",
    password: "hello",
    pokemon: pokemon,
  },
];
module.exports = users;
