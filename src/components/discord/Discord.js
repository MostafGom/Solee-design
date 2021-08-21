import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import { Icon } from '@iconify/react';

function Discord() {
  const classes = useStyles()

  return (
    <div className={classes.discord}>
      <Grid container justifyContent='space-between'>
        <Grid item xs={4} container>
          <Grid item xs={8} container>
            <Grid item xs={6}>
              <Icon icon="mdi:discord" color="#1ec1c3" width="30" />
            </Grid>
            <Grid item xs={6}>
              <Typography>DiscordId</Typography>
            </Grid>

            <Grid item xs={12}>

              <Typography>489fwkejli$RH%</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4} >
          <Button variant='text' className={classes.declineBetn} color='secondary' fullWidth>
            Unbind
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Discord
