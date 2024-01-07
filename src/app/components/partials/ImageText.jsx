import Link from "next/link";
import React from "react";
import {Button, Image} from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

const ImageText = ({ imageUrl, altText, displayText }) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={imageUrl}
        alt={altText}
        style={{
          display: "block",
          margin: "auto",
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
        <p className="text-2xl md:text-7xl font-extrabold text-wrap">{displayText}</p>
      </div>
    </div>
  );
};

export default ImageText;
