import PokemonList from "./components/PokemonList/PokemonList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { IPokemonMin } from "./interfaces/IAPIResponseTypes";
import { Link } from "react-router-dom";
import "./App.css";
const axios = require("axios");

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<IPokemonMin[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event?.currentTarget?.value);
  };

  // fetch data from server
  const fetchPokemonData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/pokemons/${searchValue}`
      );
      setPokemonData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const filteredList = pokemonData.filter((pokemon) => {
    return (
      pokemon.url.slice(-4).includes(searchValue)
    );
  });

  return (
    <div className="App">
      <header>
        <h1>
          <Link to="/" className="h1-link">
            Pokedex
          </Link>
        </h1>
        <div className="search-bar-wrapper">
          <SearchBar handleChange={handleChange} searchValue={searchValue} />
        </div>
      </header>
      <main>
        <div className="pokemon-list-wrapper">
          {
            searchValue === "" && pokemonData.length !== 0 ? <PokemonList pokemonData={pokemonData} /> : <PokemonList pokemonData={filteredList} />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
