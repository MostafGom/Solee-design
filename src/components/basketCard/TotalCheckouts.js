import { IconButton, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function TotalCheckouts() {
  const classes = useStyles({ color: 'red' })

  return (
    <div className={classes.basketCard} >
      <div className={classes.infoContainer}>
        <Typography variant='body2' className={classes.info}>Total Checkouts</Typography>
        <Typography variant='body2' className={classes.info}><span className={classes.cyan__cartTotal}>78</span>&nbsp;/&nbsp;82</Typography>
      </div>

      <IconButton className={classes.cyan__cartIconBtn} >
        <AddShoppingCartIcon className={classes.cyan__cartIcon} fontSize='large' />
      </IconButton>
    </div>
  )
}

export default TotalCheckouts
