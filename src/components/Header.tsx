import React from "react";
//darkmode toggle icons
import { BsMoon, BsSun } from "react-icons/bs";
import useDarkMode from "../hooks/useDarkMode";
import linkMaker from "../utils/HeaderUtils/linkMaker";
import linksArray from "../utils/HeaderUtils/linksArray";

// TODO:
// - Dropdown
// - Darkmode
// - linksArray
// - linkMaker

interface Props {
  isShiny: boolean;
  // not sure how to classify this function
  setIsShiny: Function;
}

const Header = (props: Props) => {
  //   const { changeDisplay, isShiny, setIsShiny } = props;
  const { isShiny, setIsShiny } = props;

  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <header>
      <h1 className="header-item header-h1">Pokemon 151 Project</h1>

      {/* Begin display options dropdown. See Dropdown.js */}
      <section className="darkmode-shiny-dropdown">
        <menu className="darkmode-shiny-section">
          <div className="darkmode-section">
            <div className="logo" data-testid="logo">
              {/* {isDarkMode ? "Dark Mode" : "Light Mode"} */}
            </div>
            <button
              className="toggle_btn"
              data-testid="toggle_btn"
              onClick={() => {
                setIsDarkMode(!isDarkMode);
              }}
            >
              {isDarkMode ? (
                <BsSun color="#ff0" size="24" title="Switch to light mode" />
              ) : (
                <BsMoon size="24" title="Switch to dark mode" />
              )}
            </button>
          </div>

          {/* This is the styled big green line running through the header */}
          <div className="vertical-line" />

          {/* This button toggles whether the app shows the Shiny forms of the pokemon */}
          <div className="shiny-button-div">
            <button
              className="shiny-button"
              onClick={() => {
                setIsShiny(!isShiny);
              }}
            >
              {isShiny ? "Show Non-Shiny Forms" : "Show Shiny Forms"}
            </button>
          </div>
        </menu>

        {/* The dropdown section lives here */}
        {/* <Dropdown changeDisplay={changeDisplay} /> */}
      </section>

      <section className="adam-info header-item">
        <h2>Author: Adam Hinton</h2>

        {/* the linkMaker function produces header links. Update linksArray (imported above) to add/change/remove links*/}
        <nav className="header-nav">{linkMaker(linksArray)}</nav>
      </section>
    </header>
  );
};

export default Header;
