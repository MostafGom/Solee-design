import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2)

  },
  notification: {
    color: 'gray',
    position: 'relative'
  },
  account: {
    display: 'flex',
    alignItems: 'center'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column'

  },
  outerNotification: {
    border: '1px solid gray',
    borderRadius: '10px',
    position: 'relative',
    "&::before": {
      content: '""',
      width: '10px',
      height: '10px',
      backgroundColor: '#fe7448',
      borderRadius: '50%',
      position: 'absolute',
      top: '-5px',
      right: '-5px',
      zIndex: '999',
      border: "0.05px solid white"
    }
  }

}));
