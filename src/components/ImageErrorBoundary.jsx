import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, ...props }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="relative">
      <img
        src={error ? '/images/fallback.jpg' : src}
        alt={alt}
        className={`${className} ${!loaded && !error ? 'opacity-0' : 'opacity-100'}`}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
      
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-center p-4">
          <p className="text-red-500 text-sm">
            Image not found: <br />{src}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
