import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';

import SliderImages from '../components/SliderImages';

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '100vh',
  },
}));

function HomePageImageSlider() {
  const classes = useStyles();

  const [imagenesSlide, setImagenesSlide] = useState([]);

  useEffect(() => {
    // traer los datos del backend

    // solo voy a actualizar el state como ejemplo:
    setImagenesSlide([
      {
        id: 1,
        imagen: 'https://interacso.com/blog/wp-content/uploads/2019/05/reactluminoso.png',
        titulo: 'React imagen',
      },
      {
        id: 2,
        imagen: 'https://blog.openclassrooms.com/es/wp-content/uploads/sites/5/2017/09/AdobeStock_126016889apaisado-710x367.jpg',
        titulo: 'Imagen ilustrativa',
      },
      {
        id: 3,
        imagen: 'https://aukera.es/blog/imagenes/imagen11.png',
        titulo: 'Imagen ilustrativa 2',
      },
    ])
  }, []); // solo ejecutar a cargar el componente

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <SliderImages elementos={imagenesSlide} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomePageImageSlider;
