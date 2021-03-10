import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { amber, green } from '@material-ui/core/colors';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  none: {
    opacity: 0,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));


const Alert = ({ type, message, autoclose }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(!!message);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setOpen(!!message);
  }, [message]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={autoclose || null}
      onClose={handleClose}
    >
      <SnackbarContent
        className={clsx(classes[type || 'none'])}
        message={(
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)}>
              {type === 'success' ? 'check_circle' : type}
            </Icon>
            {message}
          </span>
        )}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <Icon className={classes.icon}>close</Icon>
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default Alert;
