import React, { isAuthenticated, useState } from 'react';
import { AppBar, useMediaQuery, IconButton, Toolbar, Drawer, Button, Avatar, Box } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useStyles from './styles';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();

  return (
    <>
      {/* console.log("gdfe") */}
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
          <IconButton color="inherit" onClick={() => {}} edge="start">
            <MenuIcon />
          </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/:id" className={classes.linkButton} onClick={() => {}}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-facebook-1577909%2F&psig=AOvVaw3h73r_qnOLrljA6JSSrcIY&ust=1667000012982000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCytY7JgfsCFQAAAAAdAAAAABAE" />
              </Button>
            )}
          </div>
          {!isMobile && 'Search'}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {
                isMobile ? (
                  <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    className={classes.drawerBackground}
                    classes={{ paper: classes.drawPaper }}
                    ModalProps={{ keepMounted: true }}
                  >
                    <Sidebar setMobileOpen={setMobileOpen} />

                  </Drawer>
                ) : (
                  <Drawer />
                )
              }
        </nav>
      </div>
    </>
  );
};

export default NavBar;
