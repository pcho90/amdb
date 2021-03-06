import React, { useState, useEffect, useContext } from 'react';

import { Grid, Typography, Hidden } from '@material-ui/core';

import { useStyles } from './homepage.styles';
import { ResultsContext } from '../../contexts/results/results.context';
import Carousel from '../../components/carousel/carousel.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import { fetchHomepage } from '../../utils/fetchData';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [tvSeries, setTvSeries] = useState();
  const { context, setContext } = useContext(ResultsContext);

  const fetchData = async () => {
    const { moviesResponse, tvSeriesResponse } = await fetchHomepage();
    setMovies(moviesResponse.data.results);
    setTvSeries(tvSeriesResponse.data.results);
  };

  useEffect(() => {
    fetchData();
    setContext({
      current: null,
      movies: movies,
      tv: tvSeries
    });
    // eslint-disable-next-line
  }, []);

  const {
    homepage,
    title,
    subject,
    titleContainer,
    sliderContainer,
    sidebar,
    content
  } = useStyles();

  return (
    <div className={homepage}>
      <Grid container>
        <Hidden smDown>
          <Grid item md={2} className={sidebar}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item md={10} xs={12} container className={content}>
          <Grid item xs={12} className={subject}>
            <Grid item xs={12} className={titleContainer}>
              <span className={title}>Trending Movies</span>
            </Grid>
            <Grid
              item
              xs={12}
              className={sliderContainer}
              onClick={() => setContext({ ...context, current: movies })}
            >
              <Carousel list={movies} details />
            </Grid>
          </Grid>
          <Grid item md={12} container className={subject}>
            <Grid item xs={12} className={titleContainer}>
              <Typography variant='h5' className={title}>
                Trending TV Series
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              className={sliderContainer}
              onClick={() => setContext({ ...context, current: tvSeries })}
            >
              <Carousel list={tvSeries} details />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
