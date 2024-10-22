import styles from './preloader.module.scss'

import { useState, useEffect } from 'react';

const ImagePreloader = ({ imageUrls, children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedImages = 0;
    const totalImages = imageUrls.length;

    const preloadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = reject;
      });
    };

    const preloadAll = async () => {
      try {
        await Promise.all(imageUrls.map(preloadImage));
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue showing content even if some images fail
      }
    };

    preloadAll();
  }, [imageUrls]);

  if (!imagesLoaded) {
    return (
      <div className={styles.container}>
        <div className={styles.loader}>Loading...</div>
      </div>
    );
  }

  return children;
};

export default ImagePreloader;