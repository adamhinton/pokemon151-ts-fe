import { render, screen } from "@testing-library/react";
import AllPokemon from "../components/AllPokemon";
import pokemonData, { PokemonData } from "../data";
import renderer from "react-test-renderer";

jest.mock("../components/SinglePokemon", () => () => {
  return (
    <div data-testid="pokemon-test">
      This is a mocked SinglePokemon Component
    </div>
  );
});

jest.mock("../data", (): PokemonData => {
  return [
    {
      id: 1,
      num: "001",
      name: "Testname123",
      type: ["TestType1", "TestType2"],
      height: "0.0001m",
      weight: "0.0001kg",
      dexEntry: "This is a test dex entry",
    },
    {
      id: 2,
      num: "002",
      name: "Testname2",
      type: ["TestType2", "TestType3"],
      height: "0.0001m",
      weight: "0.0001kg",
      dexEntry: "This is a test dex entry",
    },
  ];
});

test("[1] Renders without errors", () => {
  render(<AllPokemon pokemonData={pokemonData} isShiny={true} />);
});

test("[2] All pokemon objects appear on screen", () => {
  render(<AllPokemon pokemonData={pokemonData} isShiny={true} />);

  const pokemonList = screen.getAllByTestId("pokemon-test");

  expect(pokemonList.length).toBe(2);
});

test.only("[3] Matches snapshot from 9.17.22", () => {
  const component = renderer.create(
    <AllPokemon pokemonData={pokemonData} isShiny={true} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
