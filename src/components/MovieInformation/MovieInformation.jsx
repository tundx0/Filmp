import React from 'react';
import { Modal, Typography, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMovieQuery } from '../../services/TMDB';

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong go back</Link>
      </Box>
    );
  }
  return (
    <Grid container className={classes.containerSpaceAround}>

    </Grid>
  );
};

export default MovieInformation;
