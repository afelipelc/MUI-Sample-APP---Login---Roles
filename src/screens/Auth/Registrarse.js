import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '../../components/web/Alert';
import Link from '../../components/web/Link';

import axiosClient from '../../config/axiosClient';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  file: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: '-1px',
  },
  filename: {
    marginLeft: 20,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const SignUp = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] =  useState(null);
  const [goLogin, setGoLogin] = useState(false);


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };


  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMessage(null);

    axiosClient.post('/usuarios', user).then((response) => {
      console.log(response);
      setGoLogin(true);
    })
    .catch((error) => {
      // console.log(error.message);
      setErrorMessage(error.message);
    })
  }

  if (goLogin) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registrarme
        </Typography>
        <form className={classes.form} onSubmit={handleSignUp}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            defaultValue={user.nombre}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="apellidos"
            label="Apellidos"
            name="apellidos"
            defaultValue={user.apellidos}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            defaultValue={user.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            defaultValue={user.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registrarme
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" text="¿Ya tienes una cuenta? Ingresa aquí." variant="body2" />
            </Grid>
          </Grid>
        </form>
      </div>
      {errorMessage &&
        <Alert type="error" message={errorMessage} autoclose={5000} />
      }
    </Container>
  );
}

export default withRouter(SignUp);
