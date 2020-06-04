import React from 'react';

import { Typography, Grid } from '@material-ui/core';

import { useStyles } from './detail-tabs.styles';
import { StyledTabs, StyledTab, TabPanel } from '../tabs/tabs.component';
import Video from '../video/video.component';
import Carousel from '../carousel/carousel.component';

const DetailTabs = ({ images, recs, trailer }) => {
  const { image, tabs, padding, video } = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(recs);

  return (
    <div className={tabs}>
      <StyledTabs centered value={value} onChange={handleChange}>
        <StyledTab label='Trailer' />
        <StyledTab label='Images' />
        <StyledTab label='Similar Titles' />
      </StyledTabs>
      <TabPanel className={video} value={value} index={0}>
        <Video id={trailer} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {images &&
            images.map(({ file_path }, idx) => (
              <Grid key={idx} item md={4}>
                <img
                  alt='backdrop'
                  className={image}
                  src={`https://image.tmdb.org/t/p/w500${file_path}`}
                />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Carousel list={recs} details={false} />
      </TabPanel>
      <Typography className={padding} />
    </div>
  );
};

export default DetailTabs;
