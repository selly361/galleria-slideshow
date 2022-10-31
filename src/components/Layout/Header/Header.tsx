import { LogoIcon } from "assets/icons";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNav = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid var(--color-grey-9);
`;

const StartSlideShowButton = styled.button`
  background: transparent;
  border: none;
  padding: 0px;
  color: var(--color-grey-1);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.120625rem;
  transition: color 0.2s ease 0s;
  cursor: pointer;
  font-size: .9rem;

  &:hover {
    color: black;
  }
  
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <LogoIcon />
        <StartSlideShowButton>START SLIDESHOW</StartSlideShowButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
