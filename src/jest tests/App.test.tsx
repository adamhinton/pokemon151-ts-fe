import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("../components/AllPokemon", () => () => {
  return (
    <div data-testid="All-pokemon-test">
      This is a mocked AllPokemon Component
    </div>
  );
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
