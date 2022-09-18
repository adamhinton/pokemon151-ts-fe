export type Pokemon = {
  id: number;
  num: string;
  name: string;
  type: [string, string?];
  height: string;
  weight: string;
  dexEntry: string;
};

export type PokemonData = Pokemon[];

export const pokemonData: PokemonData = [
  {
    id: 1,
    num: "001",
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "6.9 kg",
    dexEntry:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
  },
];

export default pokemonData;
