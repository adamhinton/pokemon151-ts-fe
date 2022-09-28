// Will map over this to produce header nav links. Update this to add/change/remove links
const linksArray: Link[] = [
  {
    text: "Source",
    href: new URL("https://github.com/adamhinton/pokemon151-ts-fe"),
  },
  {
    text: "Bulbapedia",
    href: new URL("https://bulbapedia.bulbagarden.net"),
  },
  {
    text: "PokeAPI",
    href: new URL("https://pokeapi.co"),
  },
  {
    text: "Shinies",
    href: new URL("https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon"),
  },
];

export type Link = {
  text: string;
  href: URL;
};

export default linksArray;
