// Will map over this to produce header nav links. Update this to add/change/remove links
const linksArray: Link[] = [
  {
    text: "Source",
    href: "https://github.com/adamhinton/pokemon-project",
  },
  {
    text: "Bulbapedia",
    href: "https://bulbapedia.bulbagarden.net",
  },
  {
    text: "PokeAPI",
    href: "https://pokeapi.co",
  },
  {
    text: "Shinies",
    href: "https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon",
  },
];

export type Link = {
  text: string;
  href: string;
};

export default linksArray;
