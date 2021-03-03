import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import GridItem from './GridItem';

const useStyles = makeStyles(() => ({
  photos: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(calc(100% / 3), 1fr))',
    gridTemplateRows: 'repeat(2, calc(100% / 2))',
    gridGap: '1px',
    alignItems: 'start',
    justifyItems: 'center',
    margin: 'auto',
    width: '100%',
    height: '100%',
    maxHeight: '250px',
    '&a': {
      maxWidth: '100%',
      maxHeight: '100%',
      height: '100%',
      width: '100%',
    },
  },
  items2: {
    '&$a:nth-child(1)':{
      gridColumn: 'span 2',
      maxHeight: '97px',
    },
    '&$a:nth-child(2)': {
      gridColumn: 'span 2',
      maxHeight: '97px',
    },
  },
  items3: {
    '&a:nth-child(3)': {
      gridColumn: 'span 2',
      maxHeight: '97p',
    },
  },
}));

const CustomGallery = ({ photos }) => {
  const classes = useStyles();

  const renderPhotos = () => {
    const originPhotos = photos.sort((a, b) => (a.is_default ? -1 : 1));
    return originPhotos.map((photo, index) => {

      return (
        <GridItem
          key={`photo_${photo.id}`}
          id={photo.id}
          title={photo.title}
          file={photo.file}
          overaly={index > 2 ? 'Ver más' : undefined }
        />
      );
    });
  };
  
  return (
    <div className={clsx(classes.photos, classes.items2)}>
      {renderPhotos()}
    </div>
  );
};

export default CustomGallery;