import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import FbImageLibrary from 'react-fb-image-grid';



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

  // const [imagenes, setImagenes] = useState(null);
  // const [gridImagenes, setGridImagenes] = useState(null);
  const [fotos, setFotos] = useState(null);

  // 2 use effect previos

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
          {/*imagenes && (
            <GaleriaImagenes imagenes={imagenes} />
          )*/}
        </Grid>
        <Grid item xs={4} >
          {/*gridImagenes && (
            <Gallery images={gridImagenes} enableImageSelection={false} />
          )*/}
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