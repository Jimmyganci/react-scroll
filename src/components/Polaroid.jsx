import React from "react";

const Polaroid = ({ project, index, polaroidRef, isVisible }) => {
  return (
    <div
      ref={polaroidRef}
      className="polaroid"
      style={{
        alignSelf: index % 2 !== 0 && `flex-end`,
        opacity: isVisible && `1`,
        transform: isVisible && `translateY(0)`,
        transitionDelay: index % 2 !== 0 && `0.3s`,
      }}
    >
      <div className="polaroid__image">
        <img src={project.image} alt="photo" />
      </div>
      <div className="polaroid__text">
        <p>{project.title}</p>
      </div>
    </div>
  );
};

export default Polaroid;
