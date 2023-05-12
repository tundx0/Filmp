import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  // console.log(movie, i);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          { movie?.poster_path
            ? <img alt={movie.title} className={classes.image} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />
            : <img alt={movie.title} className={classes.image} src="https://fillmurray.com/200/300" />}
          <Typography className={classes.title} variant="h5">{movie?.title}</Typography>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
