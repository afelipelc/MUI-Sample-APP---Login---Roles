import React, { useRef } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Link from '../../components/web/Link';

import Alert from '../../components/web/Alert';

import { loadSession, useSessionDispatch } from '../../sessionContext';

import {
  LoginProvider, useLoginState, useLoginpatch, setUser, loginUser,
} from './login-context';

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

/**
 * Login form with LoginProvider, only use state and call action for login
 *
 * LoginProvider provides logic state like redux
 */
const Login = () => {

  const classes = useStyles();
  const {
    loading,
    user,
    error,
    success,
    redirect,
    // business,
  } = useLoginState();
  const loginDispatch = useLoginpatch();

  const sessionDispatch = useSessionDispatch();

  const nameInput = useRef();
  const location = useLocation();

  const handleChange = (e) => {
    setUser(loginDispatch, {
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(loginDispatch, user);
  };

  if (success) {
    loadSession(sessionDispatch); // load stored user data
    let redirectTo = redirect || '/';
    
    if (redirect && redirect === '/') {
      if (location.state && location.state.from) {
        redirectTo = location.state.from.pathname;
      } else if (window.history.state && window.history.state.prevUrl) {
        redirectTo = window.history.state.prevUrl;
      }
    }
    
    return (
      <Redirect to={redirectTo} />
    );
  }

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Iniciar Sesión</Typography>
        <form className={classes.form} onSubmit={handleLogin} noValidate>
          <TextField
            type="email"
            inputRef={nameInput}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoFocus
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading}
          >
            {!loading && 'Ingresar' }
            {loading && (
              <CircularProgress size={24} />
            )}
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/registrarme"  variant="body2" text="No tengo una cuenta" />
            </Grid>
          </Grid>
        </form>
      </div>
      {error && (
        <Alert type="error" message={error} />
      )}
    </Container>
  );
};

const WrapLogin = () => (
  <LoginProvider>
    <Login />
  </LoginProvider>
);

export default WrapLogin;
