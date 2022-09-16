import { render, screen } from "@testing-library/react";
import SinglePokemon from "../components/SinglePokemon";
import pokemonData, { PokemonData } from "../data";

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
  ];
});

test("[1] renders without errors", () => {
  render(<SinglePokemon poke={pokemonData[0]} isShiny={true} />);
});

test("[2] Displays correct Pokemon info on screen", () => {
  render(<SinglePokemon poke={pokemonData[0]} isShiny={true} />);

  const name = screen.queryByText(/testname123/i);
  const type = screen.queryByText(/TestType1/i);
  const dexEntry = screen.queryByText(/This is a test dex entry/i);
  const height = screen.queryByText(/.0001m/i);
  const weight = screen.queryByText(/0.0001kg/i);

  expect(name).toBeVisible();
  expect(type).toBeVisible();
  expect(dexEntry).toBeVisible();
  expect(height).toBeVisible();
  expect(weight).toBeVisible();
});
