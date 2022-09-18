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

const PokeID = styled.span`
  font-size: 70%;
`;

const PokeImageContainer = styled.figure`
  height: 171px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokeImage = styled.img`
  width: 90%;
`;

const SinglePokemon = (props: Props): ReactElement => {
  const { poke, isShiny } = props;
  const { name, type, dexEntry, height, weight, id, num } = poke;

  return (
    <PokemonCard data-testid="pokemon-card">
      {/* Not sure there's actually any styling for poke-name */}
      <h2 className="poke-name card-item">
        {name} <PokeID>#{id}</PokeID>
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
      <PokeImageContainer className="img-container card-item">
        {/* Displays either the shiny or normal form of the pokemon based on user preference */}
        {isShiny ? (
          <PokeImage
            className="poke-img"
            data-testid="shiny"
            src={`https://www.serebii.net/Shiny/SWSH/${num}.png`}
            alt={name}
          />
        ) : (
          <PokeImage
            className="poke-img"
            data-testid="not-shiny"
            src={`https://www.serebii.net/swordshield/pokemon/${num}.png`}
            alt={name}
          />
        )}
      </PokeImageContainer>

      <blockquote className="card-item">{dexEntry}</blockquote>
    </PokemonCard>
  );
};

export default SinglePokemon;
