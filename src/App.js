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

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} >
          <CarCard datos={{ nombre: 'Sentra 2021', marca: 'Nissan' }} />
        </Grid>
      </Grid>
      
    </Paper>
  );
}

export default App;
