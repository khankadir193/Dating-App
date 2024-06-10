// src/components/SwipeableComponent.js
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
});

const SwipeableComp = () => {
  const classes = useStyles();

  const handleChangeIndex = (index) => {
    console.log('Current index is', index);
  };

  return (
    <SwipeableViews onChangeIndex={handleChangeIndex} resistance animateHeight axis='y'>
      <div className={`${classes.slide} ${classes.slide1}`}>Slide 1</div>
      <div className={`${classes.slide} ${classes.slide2}`}>Slide 2</div>
      <div className={`${classes.slide} ${classes.slide3}`}>Slide 3</div>
    </SwipeableViews>
  );
};

export default SwipeableComp;
