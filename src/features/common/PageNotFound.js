import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  PageNotFound: {
    color: '#999'
  },
});

export default function PageNotFound() {
  const classes = useStyles();
  
  return <div className={classes.PageNotFound}>Page not found.</div>;
}
