import { makeStyles } from '@material-ui/core';
import React from 'react';
import ScrollArrow from './cards/scroll';
import TimelineTeaser from './parts/TimelineTeaser';
import { Link } from 'react-router-dom';

 
const useStyles = makeStyles(theme => ({

}))



const Portfolio = props =>{
  const classes = useStyles();
  return (
    <div>
      <ScrollArrow/>
      <TimelineTeaser/>
      {/* past and current projects */}
    </div>
    
  );
}

export default Portfolio;