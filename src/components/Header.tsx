import React from "react";
//darkmode toggle icons
import { BsMoon, BsSun } from "react-icons/bs";
import styled from "styled-components";
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
    <StyledHeader>
      <H1>Pokemon 151 Project</H1>

      {/* Begin display options dropdown. See Dropdown.js */}
      <DarkModeShinyDropdown>
        <DarkModeShinySection>
          {/* I don't think darkmode-section is used in original styled. TODO: Delete */}
          <div className="darkmode-section">
            <Logo>{isDarkMode ? "Dark Mode" : "Light Mode"}</Logo>
            <DarkModeToggleButton
              onClick={() => {
                setIsDarkMode(!isDarkMode);
              }}
            >
              {isDarkMode ? (
                <BsSun color="#ff0" size="24" title="Switch to light mode" />
              ) : (
                <BsMoon size="24" title="Switch to dark mode" />
              )}
            </DarkModeToggleButton>
          </div>

          {/* This is the styled big green line running through the header */}
          <VerticalLine />

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
        </DarkModeShinySection>

        {/* The dropdown section lives here */}
        {/* <Dropdown changeDisplay={changeDisplay} /> */}
      </DarkModeShinyDropdown>

      <section className="adam-info header-item">
        <h2>Author: Adam Hinton</h2>

        {/* the linkMaker function produces header links. Update linksArray (imported above) to add/change/remove links*/}
        <nav className="header-nav">{linkMaker(linksArray)}</nav>
      </section>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: rgb(46, 37, 37);
  color: rgb(221, 203, 203);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 5%;
  padding-right: 5%;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;
const HeaderItem = styled.div`
  color: blue;
  width: 30%;
  padding: 3%;

  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

const H1 = styled(HeaderItem as "h1")`
  margin-top: 0;
  font-size: 2.25rem;
  margin-bottom: 2%;
  padding: 0;
`;

const DarkModeShinyDropdown = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

const DarkModeShinySection = styled.menu`
  display: flex;
  justify-content: center;
  padding: 3%;
  margin: 0;
  width: 90%;
`;

const Logo = styled.div`
  /* Darkmode toggle logo */
  font-size: 1.2rem;
  font-weight: 600;
`;

/* The darkmode toggle button */
const DarkModeToggleButton = styled.button`
  background-color: var(--button-bg);
  color: var(--button-text);
  cursor: pointer;
  border: none;
  border-radius: 20%;
`;

const VerticalLine = styled.div`
  border-left: 6px solid green;
  margin: 0% 2%;
`;
