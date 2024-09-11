import React from 'react';

export const StarIcon = (props) => {
  const { classNameSvg } = props;
  return (
    <svg className={`w-6 h-6 ${classNameSvg}`} 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="1.5" stroke-linecap="round" 
    stroke-linejoin="round" class="icon icon-wishlist">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};
