import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Hidden from '@material-ui/core/Hidden';

import { useStyles } from './styles'

function DashboarAppbar() {
  const classes = useStyles()
  return (
    <div className={classes.DasboardAPPbar} >
      <Grid container>
        <Hidden only='xs'>
          <Grid item sm={2} >
            <Typography>
              Date
            </Typography>
          </Grid>
        </Hidden>
        <Grid item xs={3} sm={2} >
          <Typography>
            Product
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2} >
          <Typography>
            SIZE(US)
          </Typography>
        </Grid>
        <Hidden only='xs'>
          <Grid item sm={2} >
            <Typography>
              WEBSITE
            </Typography>
          </Grid>
        </Hidden>
        <Grid item xs={3} sm={2} >
          <Typography>
            PRICE
          </Typography>
        </Grid>
        <Grid item xs={3} sm={2}>
          <Typography >
            STATUS
          </Typography>
        </Grid>

      </Grid>
    </div>
  )
}

export default DashboarAppbar
