import { Box, Button, Grid, Typography } from '@material-ui/core'
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
              <Icon icon="bx:bx-transfer-alt" color="#1ec1c3" width="30" />
            </Grid>
            <Grid item xs={6}>
              <Typography>Transfer</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>
                <Box fontWeight="fontWeightLight" fontSize={12} m={1}>
                  Current&nbsp;Email
                </Box>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography>489fwkejli$RH%</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}  >
          <Button variant='text' className={classes.transferBetn} fullWidth>
            Transfer
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Discord
