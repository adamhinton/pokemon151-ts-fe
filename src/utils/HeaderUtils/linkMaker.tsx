import { Link } from "./linksArray";

const linkMaker = (linksArray: Link[]): JSX.Element[] => {
  return linksArray.map((link) => {
    const { href, text } = link;
    return (
      <a target="_blank" rel="noreferrer" href={href} key={text}>
        {text}
      </a>
    );
  });
};

export default linkMaker;
