import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

function GaleriaImagenes({ imagenes }) {
  return (
    <ImageGallery items={imagenes} thumbnailPosition="left" />
  );
};

export default GaleriaImagenes;
