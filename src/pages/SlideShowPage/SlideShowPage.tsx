import { AnimatePresence, motion } from "framer-motion";
import { nextSlide, prevSlide } from "features/slideShowSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
import { slideAnimation } from "global/animation";
import styled from "styled-components";

const Container = styled.main`
  width: 100vw;
  height: 100vh;

`

const SlideShowPage = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.slideShow);
  const art = state.slideShowData[state.currentSlideIndex];


  

  return (
    <AnimatePresence mode="wait" custom={state.direction}>
      <motion.div
        key={art.name}
        custom={state.direction}
        variants={slideAnimation}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <Container>
          
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideShowPage;
