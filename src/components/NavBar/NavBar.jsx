import React from 'react';
import { AppBar, useMediaQuery, IconButton, Toolbar, Drawer, Button, Avatar } from '@mui/material';
import { Menu, Account, Circle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:400px)');
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        {isMobile && (
          <IconButton
            color="Inherit"
            edge="start"
            style={{ outline: 'none' }}
            onClick={() => {}}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
        )}
      </Toolbar>

    </AppBar>
  );
};

export default NavBar;
