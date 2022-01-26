import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useMedia } from 'use-media';
import { MEDIA_QUERY } from '../../../../common/foundation';
import history from '../../../../common/history';
import { goldenAward } from '../../../../images';
import { setPersonDetail } from '../../redux/awardSlice';

const useStyles = makeStyles({
  winner: {},
  winnerMobile: {
    width: '100%',
    position: 'relative',
  },
  winnerLabel: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#e7c477',
    textTransform: 'uppercase',
  },
  winnerName: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#f5f5f5',
    '&:hover': {
      color: '#e7c477',
    },
  },
  winnerMobileDesc: {
    position: 'absolute',
    zIndex: 1,
    backgroundImage: 'linear-gradient(0, rgba(0, 0, 0, 0.8), transparent)',
    top: '60%',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'flex-end',
    '& .text': {
      padding: '20px',
    },
  },
  winnerImg: {
    height: '560px',
    width: '100%',
    objectFit: 'cover',
  },
  winnerCenterImg: {
    height: '278px',
    width: '100%',
    objectFit: 'cover',
    '&.bottom': {
      paddingBottom: '8px',
    },
  },
  winnerDesktop: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    '& .leftColumn': {
      paddingRight: '8px',
      flexGrow: 4,
    },
    '& .centerColumn': {
      flexGrow: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '& .rightColumn': {
      paddingLeft: '8px',
      flexGrow: 3,
    },
  },
  nominees: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  nomineeItem: {
    width: '25%',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
  },
  nomineeHeader: {
    padding: '4px 10px',
    marginBottom: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#f5f5f5',
    textTransform: 'capitalize',
    backgroundColor: '#1a1a1a',
  },
  nomineeImg: {
    width: '100%',
    height: '294px',
    objectFit: 'cover',
  },
  nomineeName: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#edcc6d',
    '&:hover': {
      color: '#e7c477',
    },
  },
});

export default function WinnerAndNominee ({ award }) {
  const { winner, nominees } = award;
  const classes = useStyles();
  const mobileView = useMedia(MEDIA_QUERY.TABLET);
const dispatch = useDispatch();
  
  const winnerMobile = (
    <div 
      className={classes.winnerMobile}
      onClick={() => handleClickPerson(winner)}
    >
      <img
        className={classes.winnerImg}
        src={winner.images[0]}
        alt='winner'
        width='100%'
      />
      <div className={classes.winnerMobileDesc}>
        <div className='text'>
          <div className={classes.winnerLabel}>
            WINNER
          </div>
          <div className={classes.winnerName}>
            {winner.name}
          </div>
        </div>
      </div>
    </div>
  );

  const handleClickPerson = (person) => {
    dispatch(setPersonDetail(person))
    history.push('/detail')
  }
  
  const winnerDesktop = (
    <div 
      className={classes.winnerDesktop}
      onClick={() => handleClickPerson(winner)}
    >
      <div className='leftColumn'>
        <img
          className={classes.winnerImg}
          src={winner.images[0]}
          alt='winner'
          width='100%'
        />
      </div>
      {winner.images[1] && (
        <div className='centerColumn'>
          <img
            className={classes.winnerCenterImg}
            src={goldenAward}
            alt='winner'
          />
          <img
            className={clsx(classes.winnerCenterImg, 'bottom')}
            src={winner.images[1]}
            alt='winner'
          />
        </div>
      )}
      {winner.images[2] && (
        <div className='rightColumn'>
          <img
            className={classes.winnerImg}
            src={winner.images[2]}
            alt='winner'
            width='100%'
          />
        </div>
      )}
    </div>
  );

  const nomineeItems = (
    <div className={classes.nominees}>
      {nominees.length > 0 && nominees.map((nominee) => (
        <div 
          className={classes.nomineeItem}
          onClick={() => handleClickPerson(nominee)}
        >
          <div className={classes.nomineeHeader}>
            {`${award.name} nominee`}
          </div>
          <img
            className={classes.nomineeImg}
            src={nominee.images}
            alt='nominees'
          />
          <div className={classes.nomineeName}>
            {nominee.name}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className='WinnerAndNominee'>
      <div className={classes.winner}>
        {mobileView ? winnerMobile : winnerDesktop}
      </div>
      <div className={classes.nominees}>
        {nomineeItems}
      </div>
    </div>
  );
}