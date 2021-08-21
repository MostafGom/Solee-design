import { IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function TotalFailures() {
  const classes = useStyles({ color: 'red' })

  return (
    <div className={classes.basketCard} >
      <div className={classes.infoContainer}>
        <Typography variant='body2' className={classes.info}>Total Failures</Typography>
        <Typography variant='body2' className={classes.info}><span className={classes.orange__cartTotal}>10</span>&nbsp;/&nbsp;82</Typography>
      </div>

      <IconButton className={classes.orange__cartIconBtn} >
        <AddShoppingCartIcon className={classes.orange__cartIcon} fontSize='large' />
      </IconButton>
    </div>
  )
}

export default TotalFailures
