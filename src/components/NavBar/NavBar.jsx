import React, { useState, useEffect } from 'react';
import { AppBar, useMediaQuery, IconButton, Toolbar, Drawer, Button, Avatar, Box } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { Search, Sidebar } from '..';
import useStyles from './styles';
import { fetchToken, createSessionId, moviesApi } from '../../utils';
import { setUser, userSelector } from '../../features/auth';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const { isAuthenticated, user } = useSelector(userSelector);
  const dispatch = useDispatch();

  console.log(user);
  const token = localStorage.getItem('request_token');
  const sessionIdFromLocalStorage = localStorage.getItem('session_id');

  useEffect(() => {
    const loginUser = async () => {
      if (token && sessionIdFromLocalStorage) {
        const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);
        dispatch(setUser(userData));
      } else {
        const sessionId = await createSessionId();
        const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
        dispatch(setUser(userData));
      }
    };
    loginUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton color="inherit" onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)} edge="start" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => { }}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to={`/profile/${user.id}`} className={classes.linkButton} onClick={() => { }}>
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar style={{ width: 30, height: 30 }} alt="Profile" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-facebook-1577909%2F&psig=AOvVaw3h73r_qnOLrljA6JSSrcIY&ust=1667000012982000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLCytY7JgfsCFQAAAAAdAAAAABAE" />
              </Button>
            )}
          </div>
          {!isMobile && <Search /> }
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
                onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                className={classes.drawerBackground}
                classes={{ paper: classes.drawPaper }}
                ModalProps={{ keepMounted: true }}
              >
                <Sidebar setMobileOpen={setMobileOpen} />

              </Drawer>
            ) : (
              <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
            )
          }
        </nav>
      </div>
    </>
  );
};

export default NavBar;
