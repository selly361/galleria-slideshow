import { Link, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect } from "react";

import { GalleryImage } from "components";
import Macy from "macy";
import { galleryAnimation } from "global/animation";
import galleryData from "data/data.json";
import { macyOptions } from "data/macyOptions";
import { motion } from "framer-motion";
import { reset } from "features/slideShowSlice";
import styled from "styled-components";
import { useAppDispatch } from "app/hooks";

const Container = styled(motion.main)`
  width: 90vw;
  margin: 3rem auto;
`;


const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    new Macy(macyOptions);
    dispatch(reset())
  }, []);

  
  return (
    <Container
      variants={galleryAnimation}
      initial="hide"
      animate="show"
      id="grid-container"
    >
      {galleryData.map((gallery, index) => (
          <GalleryImage
            index={index}
            image={gallery.images.thumbnail}
            artName={gallery.name}
            artistName={gallery.artist.name}
          />
      ))}
    </Container>
  );
};

export default HomePage;
