import { NextButtonIcon, PrevButtonIcon } from "assets/icons";
import { nextSlide, prevSlide } from "features/slideShowSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  min-height: 200px;
  display: grid;
  align-self: end;
  padding-bottom: 2rem;
  margin: auto;
  gap: 1rem;
`;

const ProgressBar = styled.div<{ width: string }>`
  transition: width 1s ease;
  width: ${(props) => `${props.width}%`};
  height: 2px;
  background-color: black;
`;

const ProgressBarWrap = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-grey-9);
  align-self: end;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ArtName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const ArtistName = styled.p`
  font-size: 0.9375rem;
  color: var(--color-grey-1);
`;

const Pagination = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    cursor: pointer;
  }

  path {
    fill: white;
    transition: 1s fill ease;
  }

svg:hover path {
  fill: black;
}
`

const SlideShowFooter = ({ name, artistName }: { name: string; artistName: string }) => {
  const dispatch = useAppDispatch()
  const { currentSlideIndex, slideShowData } = useAppSelector(
    (state) => state.slideShow
  );

  

  const progress = String(Math.round(((currentSlideIndex + 1) / slideShowData.length) * 100))
  return (
    <Wrapper>
      <ProgressBarWrap>
        <ProgressBar width={progress} />
      </ProgressBarWrap>
      <BottomSection>
        <div>
          <ArtName>{name}</ArtName>
          <ArtistName>{artistName}</ArtistName>
        </div>
        <Pagination>
          <PrevButtonIcon onClick={() => dispatch(prevSlide())} />
          <NextButtonIcon onClick={() => dispatch(nextSlide())} />
        </Pagination>
      </BottomSection>
    </Wrapper>
  );
};

export default SlideShowFooter;
