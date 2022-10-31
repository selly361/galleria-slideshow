import React, { useEffect } from "react";

import { GalleryImage } from "components";
import Macy from "macy";
import { galleryAnimation } from "global/animation";
import galleryData from "data/data.json";
import { macyOptions } from "data/macyOptions";
import { motion } from "framer-motion"
import styled from "styled-components";

const Container = styled(motion.main)`
  width: 90vw;
  margin: 3rem auto;
`







const HomePage = () => {

  useEffect(() => {
    new Macy(macyOptions)
  }, [])
  
  return (
    <Container variants={galleryAnimation} initial="hide" animate="show" id="grid-container">
      {galleryData.map((gallery, index) => (
        <GalleryImage index={index} image={gallery.images.thumbnail} artName={gallery.name} artistName={gallery.artist.name} />
      ))}
    </Container>
  );
};

export default HomePage;
