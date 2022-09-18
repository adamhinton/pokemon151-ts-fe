import { render, screen } from "@testing-library/react";
import AllPokemon from "../components/AllPokemon";
import pokemonData from "../data";
import renderer from "react-test-renderer";
import SinglePokemon from "../components/SinglePokemon";

jest.mock("../components/SinglePokemon", () => () => {
  return (
    <div data-testid="pokemon-test">
      This is a mocked SinglePokemon Component
    </div>
  );
});

jest.mock("../data", () => {
  return [{ name: "Test123" }, { name: "Test345" }, { name: "Test697" }];
});

test("[1] Renders without errors", () => {
  render(<AllPokemon pokemonData={pokemonData} isShiny={true} />);
});

test("[2] All pokemon objects appear on screen", () => {
  render(<AllPokemon pokemonData={pokemonData} isShiny={true} />);

  const pokemonList = screen.getAllByText(
    "This is a mocked SinglePokemon Component"
  );

  expect(pokemonList.length).toBe(3);
});

test("[3] Matches snapshot from 9.17.22", () => {
  const component = renderer.create(
    <AllPokemon pokemonData={pokemonData} isShiny={true} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
