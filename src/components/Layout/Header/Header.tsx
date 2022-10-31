import React, { useEffect } from "react";
import { nextSlide, toggleSlideShow } from "features/slideShowSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { LogoIcon } from "assets/icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  font-size: 0.9rem;

  &:hover {
    color: black;
  }
`;

const Header = () => {
  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector((state) => state.slideShow);
  const navigate = useNavigate();

  function slideShow() {
    if (isPlaying && document.hasFocus()) {
      dispatch(nextSlide());
    }
  }



  useEffect(() => {
    const interval = setInterval(slideShow, 5000)

    return () => clearInterval(interval)
  }, [isPlaying]);

  return (
    <StyledHeader>
      <StyledNav>
        <LogoIcon />
        <StartSlideShowButton onClick={() => {
           dispatch(toggleSlideShow())
      navigate("slideshow");
           
        }}>
          {!isPlaying ? "START SLIDESHOW" : "STOP SLIDESHOW"}
        </StartSlideShowButton>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
