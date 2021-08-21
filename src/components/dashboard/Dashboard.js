import { Grid, Typography } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';
import React from 'react'
import { useStyles } from './styles'
import DashboardAppbar from './DashboarAppbar'

function Dashboard({ products }) {
  const classes = useStyles()

  const renderSuccess = () => {
    return (
      <div className={classes.success}>
        SUCCESS
      </div>
    )
  }

  const renderFailure = () => {
    return (
      <div className={classes.failure}>
        FAIL
      </div>
    )
  }


  return (

    <div className={classes.DashContainer} >
      <DashboardAppbar />
      <div className={classes.DashboarcContent}>
        {products
          ? products.map(product => (
            <div key={product.id}>
              <Grid container >
                <Hidden only='xs'>
                  <Grid item sm={2}  >
                    <Typography>{product.date}</Typography>
                  </Grid>
                </Hidden>
                <Grid item xs={3} sm={2} >
                  <Typography>{product.product}</Typography>
                </Grid>
                <Grid item xs={3} sm={2}>
                  <Typography>{product.size}</Typography>
                </Grid>

                <Hidden only='xs'>
                  <Grid item sm={2} >
                    <Typography>{product.website}</Typography>
                  </Grid>
                </Hidden>

                <Grid item xs={3} sm={2} >
                  <Typography>{product.price}</Typography>
                </Grid>
                <Grid item xs={3} sm={2} >
                  <Typography component='div'>{product.status ? renderSuccess() : renderFailure()}</Typography>
                </Grid>
              </Grid>
              <hr style={{
                display: 'block', height: '1px',
                border: 0, borderTop: '1px solid #adacac',
                margin: '1em 0', padding: 0,
              }} />
            </div>
          ))
          : null
        }
      </div>
    </div>
  )

}

export default Dashboard
