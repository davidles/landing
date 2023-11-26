import React from 'react';

export const ImageComponent = ({ url, alt, h }) => {
  return (
      <img
        className={`w-96 rounded-se-[40px] ${h || "h-auto"} `}
        src={url}
        alt={alt} />
  )
}
