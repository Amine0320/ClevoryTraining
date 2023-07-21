import React from "react";
import HeroSlider, { Slide } from "hero-slider";
import { ACTIA } from "../assets/CLIENTS";
import { VMAEC } from "../assets/Partenaires";   
import { MIN } from "../assets/CLIENTS";
const BasicSlider = () => {
  return ( 
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "white",
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        slidingAutoplay: true,
        shouldDesplayButtons: true,
        autoplayDuration: 5000,
        height: "100px",
        width : "100px" , 
      }}
    >
      <Slide
        background={{
          backgroundImageSrc:  ACTIA ,
          backgroundAttachment: "fixed",
        }}
      />

      <Slide
        background={{
          backgroundImageSrc:   VMAEC ,
          backgroundAttachment: "fixed",
        }}
      />
      <Slide
        background={{
          backgroundImageSrc:  MIN ,
          backgroundAttachment: "fixed",
        }}
      />
    </HeroSlider>
  );
};

export default BasicSlider;