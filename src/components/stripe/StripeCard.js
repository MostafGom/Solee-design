import { Button, Grid, IconButton, Typography } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import React from 'react'
import { useStyles } from './styles'

function StripeCard() {
  const classes = useStyles()
  return (
    <div className={classes.stripe}>
      <Grid container >
        <Grid item xs={6}>
          <Typography variant='body2' >License Key</Typography>
        </Grid>

        <Grid item xs={12} container style={{ alignItems: 'center' }}>
          <Grid item xs={10}>
            <Typography variant='body1'>
              xxxxx-xxxxx-xxxxx-xxxxx
            </Typography>
          </Grid>
          <Grid item xs={2} >
            <IconButton fontSize='small' style={{
              backgroundColor: 'rgba(30, 193, 195, 0.1)',
            }}>
              <VisibilityOffIcon fontSize='small' className={classes.visiblityIcon} />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item xs={12} container >

          <Grid item xs={8} container>
            <Grid item xs={9}>
              <Button variant='contained' className={classes.renewBtn} fullWidth >
                <Typography variant='body2'>Renew</Typography>
                <Typography variant='body2'>Stripe</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={4} >
            <Button variant='text' className={classes.declineBetn} color='secondary' fullWidth>
              Deactivate
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default StripeCard
