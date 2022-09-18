// This takes an array of Pokemon objects and returns an individual card (SinglePokemon.js) for each object
import React, { ReactElement } from "react";
import { PokemonData } from "../data";
import SinglePokemon from "./SinglePokemon";

interface Props {
  pokemonData: PokemonData;
  isShiny: Boolean;
}

const AllPokemon = (props: Props): ReactElement => {
  const { pokemonData, isShiny } = props;
  return (
    <main className="all-pokemon">
      {pokemonData.map((poke) => {
        return <SinglePokemon poke={poke} key={poke.name} isShiny={isShiny} />;
      })}
    </main>
  );
};
export default AllPokemon;
