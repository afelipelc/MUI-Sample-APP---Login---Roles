import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  select: {
    minWidth: 200,
  }
}));

const AgregarDocente = () => {
  const classes = useStyles();
  const [profesor, setProfesor] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setProfesor({
      ...profesor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Validar formulario y enviar");
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre"
              name="nombre"
              value={profesor.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Apellidos"
              name="apellidos"
              value={profesor.apellidos}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              value={profesor.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Teléfono"
              name="telefono"
              type="phone"
              value={profesor.telefono}
              onChange={handleChange}
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
