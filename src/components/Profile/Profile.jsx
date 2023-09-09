import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const user = useSelector(userSelector);
  const logOut = () => {
    localStorage.clear();

    window.location.href = '/';
  };
  const favouriteMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onClick={logOut}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      { !favouriteMovies.length ? <Typography variant="h5">Add favourites or watchlist some movies to see them here! </Typography>
        : (
          <Box>
            Favourite Movies
          </Box>
        )}
    </Box>
  );
};

export default Profile;
