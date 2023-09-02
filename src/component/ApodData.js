import Details from "./Details";
import Img from "./Img";
import Video from "./Video";
import styled from "styled-components"
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const ApodData = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { apodData } = props;
  const ApodDiv = styled.div`
    text-align: center;
    border-radius: 50px;
    background-color: black;
    width: 80%;
    height: 100vh;
    margin: auto;
    padding: 3%;
    border: 2px solid black;
    &:hover {
      border: 2px solid red;
    }
  `
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === apodData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? apodData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    
      <Carousel
      dark={true}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      
    >
      <CarouselIndicators
        items={apodData}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {apodData.map((apodData) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={apodData.url}
      >
        <ApodDiv>
        {apodData.media_type === "image" ? (
        <Img hdurl={apodData.hdurl} />
      ) : (
        <Video url={apodData.url} />
      )}
      <Details apodData={apodData} />
    </ApodDiv>
      </CarouselItem>
    );
  })}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>

     
  );
};

export default ApodData;
