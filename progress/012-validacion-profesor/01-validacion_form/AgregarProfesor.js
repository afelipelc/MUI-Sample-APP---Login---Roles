import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const AgregarDocente = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              name="nombre"
              value={''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Apellidos"
              name="apellidos"
              value={''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              value={''}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Teléfono"
              name="telefono"
              value={''}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Icon>save</Icon>}
              type="submit"
            >
              Guardar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AgregarDocente;
