import pokemonData, { Pokemon } from "../data";

jest.mock("../data", (): Pokemon => {
  return {
    id: 1,
    num: "001",
    name: "Testname123",
    type: ["TestType1", "TestType2"],
    height: "0.0001m",
    weight: "0.0001kg",
    dexEntry: "This is a test dex entry",
  };
});

test("[1] Example", () => {
  console.log("pokemonData", pokemonData);
});
