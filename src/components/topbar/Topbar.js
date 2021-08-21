import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import { useStyles } from './styles';


export default function Topbar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}  >
          <div className={classes.outerNotification}>
            <IconButton>
              <NotificationsIcon fontSize='large' className={classes.notification} />
            </IconButton>
          </div>

          <div className={classes.account}>
            <IconButton>
              <Avatar alt="Maen" src="/broken-image.jpg" />
            </IconButton>

            <div className={classes.userInfo}>
              <Typography component='h1' variant='body1'>
                Username
              </Typography>

              <Typography component='p' variant='body2'>
                Email@somesite.com
              </Typography>
            </div>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
