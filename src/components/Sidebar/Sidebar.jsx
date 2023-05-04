import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
// eslint-disable-next-line import/no-named-as-default
import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },

];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];
const redLogo = 'https://images-workbench.99static.com/e5W3ntM5xkLxrx9YDdgV6VuFUjQ=/99designs-contests-attachments/102/102498/attachment_102498013';
const blueLogo = 'https://images-workbench.99static.com/e5W3ntM5xkLxrx9YDdgV6VuFUjQ=/99designs-contests-attachments/102/102498/attachment_102498013';

const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles();

  const theme = useTheme();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img className={classes.image} src={theme.palette.mode === 'light' ? redLogo : blueLogo} alt="Filmpire Logo" />;
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {
          categories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItemButton onClick={() => {}}>
                <ListItemIcon>
                  <img src={redLogo} className={classes.genreImages} height={30} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))
        }
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {
          demoCategories.map(({ label, value }) => (
            <Link key={value} className={classes.links} to="/">
              <ListItem onClick={() => {}} button>
                <ListItemIcon>
                  <img src={redLogo} className={classes.genreImages} height={30} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))
        }
      </List>
    </>
  );
};

export default Sidebar;
