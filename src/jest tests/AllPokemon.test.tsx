import { render } from "@testing-library/react";
import AllPokemon from "../components/AllPokemon";
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

test("[1] Renders without errors", () => {
  render(<AllPokemon pokemonData={pokemonData} isShiny={true} />);
});
