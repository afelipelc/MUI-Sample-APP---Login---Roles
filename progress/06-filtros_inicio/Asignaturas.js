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
    textAlign: 'center',
  }
}));

function Asignaturas() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.toolBar}>
          <p>Aquí los filtros</p>
        </Grid>

        <Grid item xs={12}>
          <p>Aquí las Asignaturas</p>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Asignaturas;