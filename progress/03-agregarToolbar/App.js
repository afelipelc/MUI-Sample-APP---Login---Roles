import CarCard from './components/CarCard';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  toolBar: {
    textAlign: 'right',
  }
}));

function App() {
  const classes = useStyles();

  const cars = [
    { nombre: 'Sentra', marca: 'Nissan' },
    { nombre: 'Mustang GT', marca: 'Ford' },
    { nombre: 'Sorento', marca: 'Kia' },
    { nombre: 'Civic', marca: 'Honda' },
    { nombre: 'Acura', marca: 'Honda' },
    { nombre: 'Stratus', marca: 'Chrysler' },
    { nombre: 'Soul', marca: 'Kia' },
  ];

  /**
   * Al agregar un nuevo elemento al array, la UI no cambia, se debe convertir a state el array de autos
   */
  const handleAgregarCar = () => {
    console.log("Se agrega nuevo auto al array");
    cars.push({ nombre: '', marca: '' });

    // mostrar arreglo
    console.log(cars);
  };

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
        <Grid item xs={12} className={classes.toolBar}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Icon>add</Icon>}
            onClick={handleAgregarCar}
          >
            Agregar
          </Button>
        </Grid>

        {renderCars()}
      </Grid>
      
    </Paper>
  );
}

export default App;
