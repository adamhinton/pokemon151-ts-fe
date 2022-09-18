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
