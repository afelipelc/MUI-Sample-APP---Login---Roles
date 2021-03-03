import React from 'react';

const SlideItem = ({ imagen, titulo, height }) => {
  return (
    <div className="each-slide">
      <div style={{ backgroundImage: `url(${imagen})`, height: height ||'450px'}}>
        <span>{titulo}</span>
      </div>
    </div>
  );
};

export default SlideItem;

