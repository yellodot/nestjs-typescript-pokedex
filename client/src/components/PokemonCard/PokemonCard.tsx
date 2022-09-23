import "./PokemonCard.css";
import { IPokemonMin } from "../../interfaces/IAPIResponseTypes";
import { IPokemon } from "../../interfaces/IAPIResponseTypes";
import { useState, useEffect } from "react";
const axios = require("axios");

type PokemonCardProps = {
  pokemon: IPokemonMin;
  id: number;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, id }) => {
  const [pokemonDetails, setPokemonDetails] = useState<IPokemon>();

  const fetchData = async (url: string) => {
    const res = await axios.get(url);
    setPokemonDetails(res.data);
  };

  useEffect(() => {
    fetchData(pokemon.url);
  }, []);

  const pokemonPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    pokemonDetails?.id
  }.png`;
  const upperCaseName =
  pokemonDetails?.name.charAt(0).toUpperCase() + pokemonDetails?.name.slice(1);
  const displayNumber = (pokemonId: number) => {
    if (pokemonId < 10) {
      return `No.00${pokemonId}`;
    } else if (pokemonId < 100) {
      return `No.0${pokemonId}`;
    } else {
      return `No.${pokemonId}`;
    }
  };

  return (
    <div className="pokemon-card-container">
      {pokemonDetails && (
        <>
          <div className="card-picture">
            <img src={pokemonPicture} alt="pokemon" />
          </div>
          <div className="card-info">
            <div className="card-info-number">{displayNumber(pokemonDetails?.id)}</div>
            <div className="card-info-name">{upperCaseName}</div>
            <div className="card-info-weight"> {pokemonDetails?.weight}kg</div>
            <div className="card-info-height"> {pokemonDetails?.height}cm</div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonCard;
