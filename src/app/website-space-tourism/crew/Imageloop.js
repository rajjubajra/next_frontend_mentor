'use cllient';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';



const ImageLoop = ({images}) => {
  console.log(images);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {images && images?.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={500}
          height={500}
          alt={`Image ${index + 1}`}
          className={`absolute w-full h-full transition-effect ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageLoop;