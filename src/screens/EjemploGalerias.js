import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';
import FbImageLibrary from 'react-fb-image-grid';
import GaleriaImagenes from '../components/GaleriaImagenes';



const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '100vh',
    paddingBottom: '50px',
  },
}));

function EjemploGalerias() {
  const classes = useStyles();

  const [imagenes, setImagenes] = useState(null);
  const [gridImagenes, setGridImagenes] = useState(null);
  const [fotos, setFotos] = useState(null);

  useEffect(() => {

    // traer los datos del back
    setImagenes([
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        description: 'Descripción de la imagen',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ]);
  }, []);

  useEffect(() => {
    setGridImagenes([
      {
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 280,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
      },
      {
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 280,
        thumbnailHeight: 174,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
      },

      {
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 280,
        thumbnailHeight: 174
      },
    ]);
  }, []);

  useEffect(() => {
    // https://github.com/Expertizo/react-fb-image-grid
    setFotos([
      'https://picsum.photos/id/1018/1000/600/',
      'https://picsum.photos/id/1015/1000/600/',
      'https://picsum.photos/id/1019/1000/600/',
      'https://picsum.photos/id/1018/1000/600/',
      'https://picsum.photos/id/1015/1000/600/',
      'https://picsum.photos/id/1019/1000/600/',
      'https://picsum.photos/id/1018/1000/600/',
      'https://picsum.photos/id/1015/1000/600/',
    ]);
  }, []);

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={4} >
          {imagenes && (
            <GaleriaImagenes imagenes={imagenes} />
          )}
        </Grid>
        <Grid item xs={4} >
          {gridImagenes && (
            <Gallery images={gridImagenes} enableImageSelection={false} />
          )}
        </Grid>
        <Grid item xs={4} >
          {fotos && (
            <FbImageLibrary
              images={fotos}
              renderOverlay={() => 'Ver imagen'}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EjemploGalerias;