import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

import Header from './components/layout/Header';
import Routes from './routes';

import {
  SessionProvider, useSessionDispatch, loadSession,
} from './sessionContext';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(8),
    },
  },
  toolbar: theme.mixins.toolbar,
}));
const theme = createMuiTheme({
  palette: {
    primary: { main: blue[700] },
  },
  secondary: pink,
  typography: {
    fontSize: 22,
    button: {
      fontSize: 13,
    },
  },
});

function App() {
  const classes = useStyles();

  const dispatch = useSessionDispatch();

  useEffect(() => {
    if (dispatch) {
      loadSession(dispatch);
    }
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <main className={classes.content}>
            <Routes />
          </main>
        </Router>
      </ThemeProvider>
    </>
  );
}

const WrapApp = () => (
  <SessionProvider>
    <App />
  </SessionProvider>
);

export default WrapApp;
