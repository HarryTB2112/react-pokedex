import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pokeApiUrl, getReqOptions } from "../../api/api";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    const response = await fetch(`${pokeApiUrl}/${id}`, getReqOptions);
    const pokemon = await response.json();
    setPokemon(pokemon);
  }

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
    <div className="pokemon-container" aria-hidden="true">
      <div className="top-info placeholder-glow">
        {pokemon.name ? (
          <h1 className="pokemon-name" role="name">
            {pokemon.name}
          </h1>
        ) : (
          <h1 className="placeholder" style={{ fontSize: "50px" }}>
            Loading
          </h1>
        )}
        {pokemon.name ? (
          <h2 className="pokemon-id">#{pokemon.id}</h2>
        ) : (
          <h2 className="placeholder" style={{ fontSize: "40px" }}>
            69
          </h2>
        )}
      </div>
      <div className="main-info placeholder-glow">
        {pokemon.sprites ? (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="sprite"
          />
        ) : (
          <p
            className="placeholder"
            style={{ width: "523.36px", height: "523.36px" }}
          >
            Loading
          </p>
        )}
        <div className="small-info">
          {pokemon.abilities ? (
            <h3>Ability: {pokemon.abilities[0].ability.name}</h3>
          ) : (
            <h3 className="placeholder">Loading</h3>
          )}
          <br />
          {pokemon.height ? (
            <h3>Height: {pokemon.height}</h3>
          ) : (
            <h3 className="placeholder">Loading</h3>
          )}
          <br />
          {pokemon.weight ? (
            <h3>Weight: {pokemon.weight}</h3>
          ) : (
            <h3 className="placeholder">Loading</h3>
          )}
          <br />
          {pokemon.types ? (
            checkTypes(pokemon.types)
          ) : (
            <>
              <h1 className="placeholder">Loading</h1>
              <h1 className="placeholder">Loading</h1>
            </>
          )}
          <br />

          {pokemon.stats ? (
            <div className="stats">
              <ul>
                <li>HP: {pokemon.stats[0].base_stat}</li>
                <li>Attack: {pokemon.stats[1].base_stat}</li>
                <li>Defense: {pokemon.stats[2].base_stat}</li>
              </ul>
              <ul>
                <li>Sp. Attack: {pokemon.stats[3].base_stat}</li>
                <li>Sp. Defense: {pokemon.stats[4].base_stat}</li>
                <li>Speed: {pokemon.stats[5].base_stat}</li>
              </ul>
            </div>
          ) : (
            <>
              <h3 className="placeholder">Loading</h3>
              <h3 className="placeholder">Loading</h3>
            </>
          )}
        </div>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}
