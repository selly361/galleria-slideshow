import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";

import { closeModal } from "features/slideShowSlice";
import styled from "styled-components";

const Image = styled(motion.img)`
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 20;
  object-fit: contain;
  height: 100vh;
`;

const StyledOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 10;
  background-color: black;
`;

const Overlay = ({ closeModal }: { closeModal: Function }) => {
  return (
    <StyledOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5, transition: { duration: 0.8 } }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      onClick={() => closeModal()}
    />
  );
};

const ViewImageModal = () => {
  const {
    modal,
    currentSlideIndex: index,
    slideShowData: data,
  } = useAppSelector((state) => state.slideShow);
  const dispatch = useAppDispatch();
  let src = data[index].images.hero.large;

  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return (
    <Fragment>
      <AnimatePresence>
        {modal && (
          <Image
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0, transition: { duration: 0.3 } }}
            onClick={() => closeModal()}
            src={src}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modal && <Overlay closeModal={() => dispatch(closeModal())} />}
      </AnimatePresence>
    </Fragment>
  );
};

export default ViewImageModal;
