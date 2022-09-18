import { render, screen } from "@testing-library/react";
import App from "../App";
import renderer from "react-test-renderer";

jest.mock("../components/AllPokemon", () => () => {
  return <div>This is a mocked AllPokemon Component</div>;
});

test("[1] Renders without errors", () => {
  render(<App />);
});

test("[2] Renders child components", () => {
  render(<App />);

  const mockedAllPokemonComponent = screen.getByText(
    "This is a mocked AllPokemon Component"
  );
  expect(mockedAllPokemonComponent).toBeVisible();
});

test("[3] Matches snapshot from 9.18.22", () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
