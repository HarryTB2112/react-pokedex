import { Pokedex, PokeFilter } from "../../components/";
import { React, useState, useEffect } from "react";
import { pokeApiUrl, getReqOptions } from "../../api/api";
import Pokeball from "../../assets/images/Pokeball.png";
import { useHome } from "../../contexts";

export default function Home() {
  const {
    pokemonData,
    setPokemonData,
    isLoading,
    setIsLoading,
    status,
    setStatus,
    tempArr,
    setTempArr,
    filterValue,
    setFilterValue,
    searchValue,
    setSearchValue,
    filteredTypeArr,
    setFilteredTypeArr,
    loadValue,
    setLoadValue,
  } = useHome();

  function filterHandler() {
    if (searchValue !== "" && status === "type") {
      setFilteredTypeArr(
        pokemonData.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );

      setTempArr(
        filteredTypeArr.filter(
          (item) =>
            item.types[0].type.name === filterValue ||
            (item.types[1] !== undefined
              ? item.types[1].type.name === filterValue
              : null)
        )
      );
    } else if (searchValue !== "") {
      setTempArr(
        pokemonData.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else if (status === "type" && filterValue !== "") {
      setTempArr(
        pokemonData.filter(
          (item) =>
            item.types[0].type.name === filterValue ||
            (item.types[1] !== undefined
              ? item.types[1].type.name === filterValue
              : null)
        )
      );
    } else {
      setTempArr(pokemonData);
    }
  }

  useEffect(() => {
    filterHandler();

    pokemonData.length > 10 ? setIsLoading(false) : null;
  }, [status, pokemonData, filterValue, searchValue]);

  const grabPokemonJSON = async () => {
    try {
      const response = await fetch("../../pokemon.json");
      const data = await response.json();

      if (response.ok) {
        data.forEach((pokemonJSON) => {
          const pokemon = {
            name: pokemonJSON.name,
            sprites: { front_default: pokemonJSON.sprite },
            types: [
              { type: { name: pokemonJSON.types[0].toLowerCase() } },
              {
                type: {
                  name:
                    pokemonJSON.types.length === 1
                      ? null
                      : pokemonJSON.types[1].toLowerCase(),
                },
              },
            ],
          };
          setPokemonData((pokemonData) => [...pokemonData, pokemon]);
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  async function loadMore() {
    setLoadValue((loadValue) => loadValue + 21);
  }

  useEffect(() => {
    grabPokemonJSON();
  }, []);

  return (
    <div className="main-container">
      {isLoading ? (
        <div>
          <img className="pokeball-load" src={Pokeball} />
        </div>
      ) : (
        <>
          <PokeFilter />
          <Pokedex />

          {tempArr.length - 1 > loadValue ? (
            <button className="load-btn" onClick={loadMore}>
              Load More...
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}
