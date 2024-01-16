"use client";
import Image from "next/image";
import React, { useState } from "react";

const SingleBookImage = ({ images }) => {
  const [imageSrc, setImageSrc] = useState(images?.front || '');

  const handleImageClick = (newSrc) => {
    setImageSrc(newSrc);
  };

  return (
    <div className="flex flex-col overflow-hidden">
    <a href={imageSrc} target="_blank">
      <Image
        width={300}
        height={200}
        alt="ecommerce"
        className="object-cover object-center rounded hover:scale-110 overflow-hidden ease-in-out duration-300"
        src={imageSrc}
      />
      </a>
      <div className="flex flex-row mt-10 gap-4 border-y-2 py-2">
        <Image
          width={50}
          height={10}
          src={images.front}
          onClick={() => handleImageClick(images.front)} 
          className={`cursor-pointer hover:border-1 border-1 ${(imageSrc === images?.front) ? 'border-red-600' : 'border-white' } hover:border-red-600 ease-in-out duration-100`}
        />
        <Image
          width={50}
          height={10}
          onClick={() => handleImageClick(images.back)}
          src={images.back}
          className={`cursor-pointer hover:border-1 border-1 ${(imageSrc === images?.back) ? 'border-red-600' : 'border-white' } hover:border-red-600 ease-in-out duration-100`}
        />
      </div>
    </div>
  );
};

export default SingleBookImage;
