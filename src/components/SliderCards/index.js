import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import SlideItem from './SlideItem';

/**
 * Componente que mostrará las imágenes recibidas
 * [
 *  {
 *    id: "id imagen",
 *    titulo: "título de la image",
 *    descripcion: "descripción del producto"
 *    image: "url de la imagen",
 *    precio: 25.50,
 *   },
 * ]
 */
const SliderCards= ({ elementos, numberOfCards }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const chevronWidth = 48;
  return (
    <div style={{ padding: `0 ${chevronWidth}px`}}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards || 5}
        gutter={20}
        leftChevron={<IconButton><Icon>chevron_left</Icon></IconButton>}
        rightChevron={<IconButton><Icon>chevron_right</Icon></IconButton>}
        outsideChevron
        chevronWidth={chevronWidth}
        showSlither
      >
        {elementos.map((item, index) => (
          <SlideItem 
            key={item.id || index} 
            imagen={item.imagen}
            titulo={item.titulo}
            descripcion= {item.descripcion}
            precio={item.precio}
            rating={item.rating}
          />
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default SliderCards;
