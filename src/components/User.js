import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import CustomAvatar from './web/CustomAvatar';
import { useSessionState, logOut, useSessionDispatch } from '../sessionContext';

// eslint-disable-next-line react/jsx-props-no-spreading
const CustomLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const User = ({ history }) => {
  const { user } = useSessionState();
  const dispatch = useSessionDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    
    setAnchorEl(null);

    logOut(dispatch);
    history.push('/login');
  };

  if (!user) {
    return (
      <Link component={CustomLink} to="/login" onClick={handleClose} color="inherit">
        Iniciar Sesión
      </Link>
    );
  }

  return (
    <div>
      <IconButton
        aria-label="user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <CustomAvatar
          name={user.nombre}
          size="sm"
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem disabled>{`${user.nombre} ${user.apellidos}`}</MenuItem>
        <MenuItem onClick={handleLogout}>Salir</MenuItem>
      </Menu>
    </div>
  );
};

export default withRouter(User);
