import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from '../config/axiosClient';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const RestaurarPassword = (props) => {
  const classes = useStyles();
  const { token } = props.match.params;
  const [mostrar, setMostrar] = useState('mensaje');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('Validando Link de recuperación de contraseña.');


  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    
    //realizar envío de nueva contraseña
    axios.post('/actualizar-password/', { password, token })
    .then((response) => {
      console.log(response.data);
        setMostrar('mensaje');
        setMensaje(response.data.message);
    })
    .catch((error) => {
      console.log(error);
      setMostrar('mensaje');
      setMensaje('Error al intentar guardar la nueva contraseña.');
    });
  };

  const renderContenido = () => {
    if (mostrar === 'formulario') {
     return (
      <form className={classes.form} onSubmit={handleRecovery} noValidate>
        <TextField
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Ingresa nueva Contraseña"
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Restablecer contraseña
        </Button>
      </form>
     ); 
    }

    return (
      <h3>{mensaje}</h3>
    );
  }

  useEffect(() => {
    // validar token en el servidor
    console.log(token);
    axios.post('/validar-token/', { token })
    .then((response) => {
      console.log(response.data);
      if (response.data.isValid) {
        setMostrar('formulario');
      } else {
        setMostrar('mensaje');
        setMensaje(response.data.message);
      }
    })
    .catch((error) => {
      console.log(error);
      setMostrar('mensaje');
      setMensaje(error.message || 'Error al validar el link proporcionado');
    });

  }, [token]);

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Recuperar contraseña</Typography>
        {renderContenido()}
      </div>
    </Container>
  );
};

export default RestaurarPassword;
