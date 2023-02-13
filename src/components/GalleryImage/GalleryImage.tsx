import { captionAnimation, cardAnimation } from "global/animation";

import React from "react";
import { motion } from "framer-motion"
import { setCurrentSlide } from "features/slideShowSlice";
import styled from "styled-components";
import { useAppDispatch } from "app/hooks";
import { useNavigate } from "react-router-dom";

interface Iprops {
  image: string;
  artistName: string;
  artName: string;
  index: number;
}

const Container = styled(motion.div)`
  position: relative;
  cursor: pointer;
  width: max-content;
  
  img {
    transition: 1s filter ease;
    width: 100%;
  }

  &:hover {
    img {
      filter: grayscale(150%);
    }
  }
`;

const Content = styled(motion.div)`
  display: grid;
  gap: 1rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: auto;
  right: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.85));
  padding: 1rem;

  `

const ArtName = styled.h4`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: normal;
  white-space: pre-line;
  color: white;
  
`;

const ArtistName = styled.p`
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.75);

`;

const GalleryImage = ({ image, artistName, artName, index }: Iprops) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const handleClick = () => {
    dispatch(setCurrentSlide({ name: artName }))
    navigate("slideshow")
  }

  return (
    <Container variants={cardAnimation(index)} initial="hide" animate="show" onClick={handleClick}>
      <img src={image} />
      <Content variants={captionAnimation} initial="hide" animate="show">
        <ArtName>{artName}</ArtName>
        <ArtistName>{artistName}</ArtistName>
      </Content>
    </Container>
  );
};

export default GalleryImage;
