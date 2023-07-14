import React, { useState, useContext, createContext } from "react";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("reset");
  const [tempArr, setTempArr] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredTypeArr, setFilteredTypeArr] = useState([]);
  const [loadValue, setLoadValue] = useState(20);

  return (
    <HomeContext.Provider
      value={{
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
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);
