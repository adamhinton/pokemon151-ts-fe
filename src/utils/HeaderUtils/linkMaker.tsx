import { Link } from "./linksArray";

const linkMaker = (linksArray: Link[]): JSX.Element[] => {
  return linksArray.map((item) => {
    const { href, text } = item;
    return (
      <a target="_blank" rel="noreferrer" href={href} key={text}>
        {text}
      </a>
    );
  });
};

export default linkMaker;
