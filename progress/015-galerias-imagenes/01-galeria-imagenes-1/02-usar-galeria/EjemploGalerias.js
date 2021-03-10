import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
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

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={4} >
          {imagenes && (
            <GaleriaImagenes imagenes={imagenes} />
          )}
        </Grid>
        <Grid item xs={12} >
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EjemploGalerias;