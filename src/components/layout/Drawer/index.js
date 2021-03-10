import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import menuItems from './menuItems';
// import { useSessionState } from '../../../sessionContext';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  hideDrawer: {
    display: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar,
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MyDrawer = ({ open, onClose }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1024px)');
  const [openSub, setOpenSub] = React.useState(null);

  // const { user } = useSessionState(); // read context value props as user

  const handleSubmenu = (id) => {
    setOpenSub(openSub === id ? null : id);
  };

  const renderSubmenu = (id, items) => (
    <Collapse in={openSub === id} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
          {/*{items.filter((option) => !option.denyFor.includes(user ? user.role || 'none' : 'none')).map((item) => (*/}
          {items.map((item) => (
          <ListItem
            button
            className={classes.nested}
            key={item.id}
            component={Link}
            to={item.url}
          >
            {item.icon && <ListItemIcon>{<Icon>{item.icon}</Icon>}</ListItemIcon>}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  );

  const expandOption = (id) => (
    open === id ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>
  );

  const drawer = (
    <>
      <div className={classes.drawerHeader}>
        <ListSubheader component="div">
          Menú del sistema
        </ListSubheader>
        <IconButton onClick={onClose}>
          <Icon>chevron_left</Icon>
        </IconButton>
      </div>
      <Divider />
      <List>
        {/*{menuItems.filter((option) => !option.denyFor.includes(user ? user.role || 'none' : 'none')).map((item) => ( */}
        {menuItems.map((item) => (
          <div key={item.id}>
            <ListItem
              button
              component={item.childs ? null : Link}
              to={item.childs ? '' : item.url}
              onClick={item.childs ? () => handleSubmenu(item.id) : null}
            >
              <ListItemIcon>{<Icon>{item.icon}</Icon>}</ListItemIcon>
              <ListItemText primary={item.text} />
              {item.childs ? expandOption(item.id) : null}
            </ListItem>
            {item.childs && renderSubmenu(item.id, item.childs) }
          </div>
        ))}
      </List>
    </>
  );

  return (
    <Drawer
      className={open ? classes.drawer : classes.hideDrawer}
      variant={matches ? 'persistent' : 'temporary'}
      anchor="left"
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {drawer}
    </Drawer>
  );
};

MyDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MyDrawer;
