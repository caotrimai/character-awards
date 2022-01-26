import {makeStyles} from '@mui/styles'
import React from 'react'
import WinnerAndNominee from '../AwardList'

const useStyles = makeStyles({
  homePage: {
    color: '#fff',
  },
})

export default function HomePage () {
  const classes = useStyles()

  return (
    <div className={classes.homePage}>
      <WinnerAndNominee/>
    </div>
  )
}