import { useNavigate } from "react-router-dom";

export default function Pokecard({ pokemon }) {
  const navigate = useNavigate();
  function checkTypes(types) {
    if (pokemon.types.length === 1) {
      return (
        <div className="types">
          <h1 className={types[0].type.name}>{types[0].type.name}</h1>
        </div>
      );
    } else {
      return (
        <div className="types">
          <h1 className={types[0].type.name}>{types[0].type.name}</h1>
          <h1 className={types[1].type.name}>{types[1].type.name}</h1>
        </div>
      );
    }
  }
  return (
    <div
      className="card"
      onClick={() => navigate(`${pokemon.name.toLowerCase()}`)}
    >
      {pokemon.sprites ? (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="sprite"
        />
      ) : (
        "Loading"
      )}
      <h1 className="title">{pokemon.name}</h1>
      {pokemon.types ? checkTypes(pokemon.types) : "Loading"}
    </div>
  );
}
