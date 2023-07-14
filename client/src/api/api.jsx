const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";
const getReqOptions = {
  headers: {
    "Content-Type": "application/json",
  },
  method: "GET",
  mode: "cors",
};

export { pokeApiUrl, getReqOptions };
