import { render } from "@testing-library/react";
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
