import { Pokecard } from "../index";
import { useState } from "react";
import { useHome } from "../../contexts";
import { useNavigate } from "react-router-dom";

export default function PokeFilter() {
  const navigate = useNavigate();

  const {
    status,
    setStatus,
    setFilterValue,
    filterValue,
    setSearchValue,
    searchValue,
  } = useHome();

  function setFilterStatus(e) {
    setStatus(e.target.value);
    setSearchValue("");
    setFilterValue("grass");
  }

  function handleFilterValue(e) {
    setFilterValue(e.target.value);
    setSearchValue("");
  }

  function handleSearchValue(e) {
    setSearchValue(e.target.value);
  }

  // async function handleSearchSubmit(e) {}

  return (
    <div className="search-field">
      <select className="filters" onChange={setFilterStatus}>
        <option value="reset">Reset</option>
        <option value="type">Type</option>
      </select>
      <form className="input-form" onSubmit={() => navigate(`/${searchValue}`)}>
        <input
          className="input-field"
          value={searchValue}
          onChange={handleSearchValue}
        />
      </form>
      {status === "type" ? (
        <select className={filterValue} onChange={handleFilterValue}>
          <option value="grass">Grass</option>
          <option value="rock">Rock</option>
          <option value="flying">Flying</option>
          <option value="ground">Ground</option>
          <option value="dark">Dark</option>
          <option value="bug">Bug</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="fighting">Fighting</option>
          <option value="fairy">Fairy</option>
          <option value="poison">Poison</option>
          <option value="fire">Fire</option>
          <option value="dragon">Dragon</option>
          <option value="ice">Ice</option>
          <option value="water">Water</option>
          <option value="steel">Steel</option>
          <option value="normal">Normal</option>
          <option value="ghost">Ghost</option>
        </select>
      ) : null}
    </div>
  );
}
