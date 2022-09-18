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

const CardItem = styled.div`
  margin: 3%;
`;

const PokeImageContainer = styled(CardItem)`
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
      <CardItem as="h2" className="poke-name card-item">
        {name} <PokeID>#{id}</PokeID>
      </CardItem>

      {/* Pokemon's type info */}
      {type[1] ? (
        <CardItem as="h3" className="card-item">
          {type[0]} / {type[1]}{" "}
        </CardItem>
      ) : (
        <h3 className="card-item">{type}</h3>
      )}

      <CardItem as="h4" className="card-item">
        Height: {height} <br />
        Weight: {weight}
      </CardItem>

      {/* image of each pokemon */}
      <PokeImageContainer as="figure" className="card-item">
        {/* Displays either the shiny or normal form of the pokemon based on user preference */}
        {isShiny ? (
          <PokeImage
            data-testid="shiny"
            src={`https://www.serebii.net/Shiny/SWSH/${num}.png`}
            alt={name}
          />
        ) : (
          <PokeImage
            data-testid="not-shiny"
            src={`https://www.serebii.net/swordshield/pokemon/${num}.png`}
            alt={name}
          />
        )}
      </PokeImageContainer>

      <CardItem as="blockquote" className="card-item">
        {dexEntry}
      </CardItem>
    </PokemonCard>
  );
};

export default SinglePokemon;
