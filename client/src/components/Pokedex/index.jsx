import { Pokecard } from "../index";
import { useState, useEffect } from "react";
import { useHome } from "../../contexts";
import { pokeApiUrl, getReqOptions } from "../../api/api";

export default function Pokedex() {
  const { pokemonData, tempArr, setPokemonData, setIsLoading, loadValue } =
    useHome();

  return (
    <>
      <div className="pokedex">
        {tempArr.map((pokemon, i) =>
          i > loadValue ? null : <Pokecard pokemon={pokemon} key={i} />
        )}
      </div>
    </>
  );
}
