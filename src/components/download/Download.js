import React from 'react'
import { Icon } from '@iconify/react';

import { Button, Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'

function Download() {
  const classes = useStyles()

  return (
    <div className={classes.download}>
      <Grid container alignItems="center" >
        <Grid item xs={4}>
          <Icon icon="codicon:desktop-download" color="lightgray" width="100" inline={true} />
          <Typography>Download App</Typography>

        </Grid>

        <Grid item xs={8}>
          <Button className={classes.downloadBtn} fullWidth >
            <Icon icon="wpf:mac-os" color="#b6b7b7" width="30" />
            Download for MacOS
          </Button>
          <Button className={classes.downloadBtn} fullWidth >
            <Icon icon="bi:windows" color="#b6b7b7" width="30" />
            &nbsp;Download for Windows
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Download
