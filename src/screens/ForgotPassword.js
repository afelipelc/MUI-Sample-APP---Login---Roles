import React, { useState } from 'react';
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


const ForgotPassword = () => {
  const classes = useStyles();
  const [mostrar, setMostrar] = useState('formulario');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');


  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRecovery = (e) => {
    e.preventDefault();
    
    //realizar envío email
    axios.post('/recuperar-password/', { email })
    .then((response) => {
      console.log(response.data);
        setMostrar('mensaje');
        setMensaje(response.data.message);
    })
    .catch((error) => {
      console.log(error);
      setMostrar('mensaje');
      setMensaje(error.message || 'Error al intentar el proceso de recuperación de contraseña.');
    });
  };

  const renderContenido = () => {
    if (mostrar === 'formulario') {
     return (
      <form className={classes.form} onSubmit={handleRecovery} noValidate>
        <TextField
            type="email"
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Ingresa tu Email"
            name="email"
            autoFocus
            value={email}
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

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Recuperar contraseña</Typography>
        {renderContenido()}
      </div>
    </Container>
  );
};

export default ForgotPassword;
