import { AnimatePresence, motion } from "framer-motion";
import { Article, SlideShowFooter } from "components";
import React, { Fragment } from "react";
import { nextSlide, prevSlide } from "features/slideShowSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import ViewImageModal from "components/ViewImageModal/ViewImageModal";
import { slideAnimation } from "global/animation";
import styled from "styled-components";

const Container = styled.main`
  width: 95vw;
  min-height: 100vh;
  display: grid;
  gap: 5rem;
`;

const SlideShowPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.slideShow);
  const art = state.slideShowData[state.currentSlideIndex];

  return (
    <Fragment>
      <Container>
      <Article {...art} />
      <SlideShowFooter name={art.name} artistName={art.artist.name} />
    </Container>
    <ViewImageModal />
    </Fragment>
  );
};

export default SlideShowPage;
