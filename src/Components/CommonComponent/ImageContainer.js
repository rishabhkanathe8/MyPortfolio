import { useState, useEffect } from 'react';
import './ImageContainer.css';

const ImageContainer = () => {
  const [currentImage, setCurrentImage] = useState("image1");
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setCurrentImage(prev => (prev === "image1" ? "image2" : "image1"));
        setFlipping(false);
      }, 1000); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`dp-image-container ${currentImage} ${flipping ? 'flip' : ''}`}></div>
  );
}

export default ImageContainer;
