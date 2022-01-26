import { makeStyles } from '@mui/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { v1 as uuid } from 'uuid';
import WinnerAndNominee from '../WinnerAndNonimee';

const useStyles = makeStyles({
  winnerAndNominee: {},
  title: {
    padding: '10px 0',
    fontSize: '30px',
    fontWeight: '500',
    color: '#edcc6d',
    borderBottom: '1px solid #303131',
  },
  awardName: {
    padding: '30px 15px',
    fontSize: '32px',
    color: '#fff',
  },
});

export default function AwardList () {
  const classes = useStyles();
  const { awards } = useSelector((state) => state.award);

  const renderAwardBlock = (award) => (
    <div key={uuid()}>
      <div className={classes.awardName}>
        {award.name}
      </div>
      <WinnerAndNominee award={award} />
    </div>
  );

  const awardItems = awards.map((award) => renderAwardBlock(award));

  return (
    <div className={classes.winnerAndNominee}>
      <div className={classes.title}>
        Winners & Nominees
      </div>
      {awardItems}
    </div>
  );
}