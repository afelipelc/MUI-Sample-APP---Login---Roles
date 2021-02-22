import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import SlideItem from './SlideItem';

/**
 * Componente que mostrará las imágenes recibidas
 * [
 *  {
 *    id: "id imagen",
 *    image: "url de la imagen",
 *    titulo: "título de la image",
 *   },
 * ]
 */
const Slider= ({ elementos, maxHeight }) => {
  return (
    <div className="slide-container">
      <Slide indicators>
        {elementos.map((item, index) => (
          <SlideItem key={item.id || index} imagen={item.imagen} titulo={item.titulo} height={maxHeight} />
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
