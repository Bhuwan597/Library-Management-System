import React from "react";

const ImageText = ({ imageUrl, altText, displayText }) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={imageUrl}
        alt={altText}
        style={{
          display: "block",
          width: "100%",
          height: '100%',
          objectFit: 'cover'
        }}
        className='min-h-[50vh]'
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          fontSize: "2em",
        }}
      >
        <p className="text-2xl md:text-7xl font-extrabold text-wrap motion-safe:animate-bounce infinite">{displayText}</p>
      </div>
    </div>
  );
};

export default ImageText;
