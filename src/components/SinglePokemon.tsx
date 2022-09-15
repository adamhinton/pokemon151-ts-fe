import React, { ReactElement } from "react";
import { Pokemon } from "../data";

interface Props {
  poke: Pokemon;
  // isShiny will be added later
  isShiny: Boolean;
}

const SinglePokemon = (props: Props): ReactElement => {
  const { poke, isShiny } = props;
  const { name, type, dexEntry, height, weight, id, num } = poke;
  console.log("poke, isShiny:", poke, isShiny);

  return <div>SinglePokemon</div>;
};

export default SinglePokemon;
