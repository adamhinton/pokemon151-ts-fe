import React, { ReactElement } from "react";

interface Props {
  // Not doing type definition for poke because that is typechecked elsewhere in the code - no need to repeat here
  poke: Object;
  // isShiny will be added later
  isShiny: Boolean;
}

const SinglePokemon = (props: Props): ReactElement => {
  const { poke, isShiny } = props;
  return <div>SinglePokemon</div>;
};

export default SinglePokemon;
