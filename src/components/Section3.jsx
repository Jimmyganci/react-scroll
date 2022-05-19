import React, { useRef } from "react";
import Polaroid from "./Polaroid";
import animal from "../assets/picture.jpg";
import circle from "../assets/cirque.jpg";
import surf from "../assets/surf.jpg";
import UseElementOnScreen from "../hooks/UseElementOnScreen";

const Section3 = () => {
  const polaroidRef = useRef();

  const isVisible = UseElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      treshold: 1,
    },
    polaroidRef
  );
  const project = [
    {
      title: "Animals",
      image: animal,
    },
    {
      title: "Circle",
      image: circle,
    },
    {
      title: "Surf",
      image: surf,
    },
  ];
  return (
    <div
      className="polaroidContainer"
      style={{ transfrom: isVisible ? `translateY(0)` : "translateY(5vw)" }}
    >
      {project.map((el, index) => (
        <Polaroid
          key={index}
          index={index}
          project={el}
          polaroidRef={polaroidRef}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
};

export default Section3;
