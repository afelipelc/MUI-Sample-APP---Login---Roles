import ImageGallery from 'react-image-gallery';

// esto se hizo para no estar importando el css donde se deba usar la galería, 
// el nuevo componente se encargaría de hacer la importación

import 'react-image-gallery/styles/css/image-gallery.css';

function GaleriaImagenes({ imagenes }) {
  // explicar que hay opciones de configuración con sus propiedades
  // <ImageGallery items={imagenes} thumbnailPosition="left" />
  // se sugiere agregar propiedades al componente.
  // ver ejemplo en https://www.linxtion.com/demo/react-image-gallery/
  return (
    <ImageGallery items={imagenes} /> 
  );
};

export default GaleriaImagenes;