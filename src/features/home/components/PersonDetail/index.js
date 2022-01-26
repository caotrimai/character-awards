import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  personDetail: {},
  name: {
    fontSize: '48px',
    lineHeight: '58px',
    fontWeight: '500',
    color: '#edcc6d',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  winnerImg: {
    height: '400px',
    width: '32%',
  },
  description: {
    marginLeft: '24px',
    fontSize: '18px',
    lineHeight: '25px',
    color: '#f5f5f5',
  },
});

export default function PersonDetail () {
  const classes = useStyles();
  const personDetail = useSelector((state) => state.award.personDetail);
  const DUMMY_IMG = 'https://dummyimage.com/300x400/7d7d7d/000000&text=+';
  const DUMMY_DESCRIPTION = 'Charismatic rancher Phil Burbank inspires fear and awe in those around him. When his brother brings home a new wife and her son, Phil torments them until he finds himself exposed to the possibility of love.';

  if (!personDetail) {
    // history.push('/');
    return <Redirect to='/' />
  }

  const { name, description = DUMMY_DESCRIPTION, images } = personDetail;
  let image = DUMMY_IMG;
  if (images) {
    image = typeof (images) === 'string' ? images : images[0];
  }

  return (
    <div className={classes.personDetail}>
      <div className={classes.name}>
        {name}
      </div>
      <div className={classes.mainContent}>
        <img
          className={classes.winnerImg}
          src={image}
          alt='winner'
          width='100%'
        />
        <div className={classes.description}>
          {description}
        </div>
      </div>

    </div>
  );
}