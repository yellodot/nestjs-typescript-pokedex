import "./PokemonList.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import { IPokemonMin } from "../../interfaces/IAPIResponseTypes";

interface PokemonListProps {
  pokemonData: IPokemonMin[];
}
const PokemonList: React.FC<PokemonListProps> = ({ pokemonData }) => {
  return (
    <div className="pokemon-list-container">
      {pokemonData && (
        <ul>
          {pokemonData?.map((pokemon, index) => (
            <li key={pokemon.url}>
              <PokemonCard pokemon={pokemon} id={index} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
