import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles({
  footer: {
    marginTop: '50px',
    borderTop: '5px solid #edcc6d',
    backgroundColor: '#1a1a1a',
  },
  wrapper: {
    margin: '0 auto',
    maxWidth: '1230px',
    padding: '0 15px',
  },
  wrapperBackground: {
    position: 'relative',
    width:'400px',
    height: '200px',
    backgroundColor: '#d33f3f',
  },
  linksWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerLinks: {
    flexWrap: 'wrap',
    paddingTop: '40px',
    paddingBottom: '50px',
    flex: '1 1 150%',
  },
  footerLink: {
    color: '#f5f5f5;',
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: '500',
    display: 'inline-block;',
    width: '184px',
    cursor: 'pointer',
  },
  privacyWrapper: {
    paddingTop: '15px',
    fontSize: '12px',
    '& .footer__privacy': {
      color: '#999',
      textDecoration: 'underline',
      paddingRight: '10px',
    },
  },
  footerText: {
    paddingTop: '15px',
    paddingBottom: '75px',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#999',
  },
});

export default function Footer () {
  const classes = useStyles();

  const privacy = (
    <div className={classes.privacyWrapper}>
      <a className='footer__privacy'>Privacy Policy</a>
      <a className='footer__privacy'>Terms &amp; Conditions</a>
    </div>
  );

  const footerLinks = (
    <div className={classes.linksWrapper}>
      <div className={classes.footerLinks}>
        <a className={classes.footerLink}><span>About HFPA</span></a>
        <a className={classes.footerLink}><span>HFPA Philanthropy</span></a>
        <a className={classes.footerLink}><span>About the Golden Globes</span></a>
        <a className={classes.footerLink}><span>Golden Globes Credentials</span></a>
        <a className={classes.footerLink}><span>Latest HFPA News</span></a>
        <a className={classes.footerLink}><span>Apply for a Grant</span></a>
        <a className={classes.footerLink}><span>Awards Rules &amp; Entry Forms</span></a>
        <a className={classes.footerLink}><span>Contact Us</span></a>
      </div>
    </div>
  );

  const footerText = (
    <div className={classes.footerText}>
      Golden Globe(S)®, Hollywood Foreign Press
      Association®, Cecil B. Demille® and Golden Globes® Statuette design mark
      are the registered trademarks and service marks and the Golden Globe®
      statuette the copyrighted property, of the Hollywood Foreign Press
      Association Copyright © Hollywood Foreign Press Association. All rights
      reserved.</div>
  );
  return (
    <div className={clsx('Footer', classes.footer)}>
      <div className={classes.wrapper}>
        {/*<div className='wrapperBackground'/>*/}
        {footerLinks}
        {privacy}
        {footerText}
      </div>
    </div>
  );
}