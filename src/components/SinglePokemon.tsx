import React, { ReactElement } from "react";
import { Pokemon } from "../data";
import styled from "styled-components";

interface Props {
  poke: Pokemon;
  // isShiny will be added later
  isShiny: Boolean;
}

const PokemonCard = styled.article`
  border: 1px solid black;
  box-sizing: border-box;
  width: 12rem;
  margin: 2%;
  background-color: #bef8f8;
`;

const SinglePokemon = (props: Props): ReactElement => {
  const { poke, isShiny } = props;
  const { name, type, dexEntry, height, weight, id, num } = poke;

  return (
    <PokemonCard data-testid="pokemon-card">
      <h2 className="poke-name card-item">
        {name} <span className="dex-id">#{id}</span>
      </h2>

      {/* Pokemon's type info */}
      {type[1] ? (
        <h3 className="poke-type card-item">
          {type[0]} / {type[1]}{" "}
        </h3>
      ) : (
        <h3 className="poke-type card-item">{type}</h3>
      )}

      <h4 className="height-weight card-item">
        Height: {height} <br />
        Weight: {weight}
      </h4>

      {/* image of each pokemon */}
      <figure className="img-container card-item">
        {/* Displays either the shiny or normal form of the pokemon based on user preference */}
        {isShiny ? (
          <img
            className="poke-img"
            data-testid="shiny"
            src={`https://www.serebii.net/Shiny/SWSH/${num}.png`}
            alt={name}
          />
        ) : (
          <img
            className="poke-img"
            data-testid="not-shiny"
            src={`https://www.serebii.net/swordshield/pokemon/${num}.png`}
            alt={name}
          />
        )}
      </figure>

      <blockquote className="card-item">{dexEntry}</blockquote>
    </PokemonCard>
  );
};

export default SinglePokemon;
