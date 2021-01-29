import CarCard from './components/CarCard';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  /**
   * Primero explicar la creación del arreglo, moviendo el objeto car del componente al array
   * 2do, crear la función de renderizar cars
   * 3ro llamar a la función de renderizado
   */

  const cars = [
    { nombre: 'Sentra', marca: 'Nissan' },
    { nombre: 'Mustang GT', marca: 'Ford' },
    { nombre: 'Sorento', marca: 'Kia' },
    { nombre: 'Civic', marca: 'Honda' },
    { nombre: 'Acura', marca: 'Honda' },
    { nombre: 'Stratus', marca: 'Chrysler' },
    { nombre: 'Soul', marca: 'Kia' },
  ];

  const renderCars = () => {
    // renderizamos cada objeto en cards
    return cars.map((car, index) => (
      <Grid item xs={12} sm={3} key={index} >
        <CarCard datos={car} />
      </Grid>
    ));
  };

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        {renderCars()}
      </Grid>
      
    </Paper>
  );
}

export default App;
