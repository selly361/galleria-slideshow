import { AnimatePresence, motion } from "framer-motion";
import { nextSlide, openModal, prevSlide } from "features/slideShowSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import type { Iart } from "types/types";
import React from "react";
import { ViewImageIcon } from "assets/icons";
import { slideAnimation } from "global/animation";
import styled from "styled-components";

const StyledArticle = styled(motion.article)`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const Image = styled.img`
  width: 550px;
  height: 600px;
  object-fit: contain;
`;

const AuthorImage = styled.img`
  height: 125px;
  width: 125px;
  position: absolute;
  right: -125px;
  bottom: -62.5px;
  object-fit: contain;
`;

const Intro = styled.section`
  position: absolute;
  height: max-content;
  background-color: white;
  width: 350px;
  top: 0;
  right: -250px;
  padding: 1rem;
`;

const ArtName = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ArtistName = styled.p`
  font-size: 0.9375rem;
  color: var(--color-grey-1);
`;

const ContentContainer = styled.div`
  width: 400px;
  margin-right: 3rem;
`;

const Desc = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  color: var(--color-grey-1);
  line-height: 2;
  margin-bottom: 2.25rem;
  z-index: 2;
  position: relative;
  height: max-content;
`;

const Year = styled.h2`
  position: absolute;
  font-weight: bold;
  color: var(--color-grey-10);
  font-size: 8.25rem;
  top: -5rem;
  right: 0;
  z-index: -1;
  line-height: 1;
`;

const Link = styled.a`
  font-size: 0.5625rem;
  font-weight: bold;
  color: var(--color-grey-1);
  text-transform: uppercase;
  letter-spacing: 0.1206rem;
  cursor: pointer;
  text-decoration: underline;
`;

const ViewImage = styled.button`
  transition: 1s background-color ease, 1s color ease;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  border: none;
  padding: 0.875rem 1rem;
  color: var(--color-white);
  font-weight: bold;
  cursor: pointer;
  bottom: 1rem;
  left: 3rem;
  font-size: .8rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
    color: black;

    path {
        fill: black;
    }
  }
`;

const Article = ({ name, images, artist, year, description }: Iart) => {
  const state = useAppSelector((state) => state.slideShow);
  const dispatch = useAppDispatch()
  return (
    <AnimatePresence mode="wait" custom={state.direction}>
      <StyledArticle
        key={name}
        custom={state.direction}
        variants={slideAnimation}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <ImageWrapper>
          <Intro>
            <ArtName>{name}</ArtName>
            <ArtistName>{artist.name}</ArtistName>
          </Intro>
          <Image src={images.hero.large} alt={name} />
          <AuthorImage src={artist.image} />
          <ViewImage onClick={() => dispatch(openModal())}>
            <ViewImageIcon /> VIEW IMAGE
          </ViewImage>
        </ImageWrapper>
        <ContentContainer>
          <Desc>
            {description}
            <Year>{year}</Year>
          </Desc>
          <Link>GO TO SOURCE</Link>
        </ContentContainer>
      </StyledArticle>
    </AnimatePresence>
  );
};

export default Article;
