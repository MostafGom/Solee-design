import { Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'

function Filter() {
  const classes = useStyles.apply()
  return (
    <div className={classes.filter} >
      <Typography variant='body2' style={{ color: 'white' }}>Filter by:</Typography>
      <div className={classes.filterByContainer} >
        <Typography variant='body2' className={classes.filterBy}>1D</Typography>
        <Typography variant='body2' className={classes.filterBy}>1M</Typography>
        <Typography variant='body2' className={classes.filterBy}>1Y</Typography>
      </div>
    </div>
  )
}

export default Filter
