import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  basketCard: {
    backgroundColor: '#2b2f55',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    margin: theme.spacing(2)
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  info: {
    color: "white",
    marginRight: theme.spacing(6),
  },


  // Cyan icon
  cyan__cartTotal: {
    fontSize: '2rem',
    color: '#63f4f7',

  },

  cyan__cartIconBtn: {
    backgroundColor: 'rgba(30, 193, 195, 0.25)',
    marginLeft: theme.spacing(4)
  },
  cyan__cartIcon: {
    opacity: 1,
    color: '#63f4f7'
  },

  // orange icon

  orange__cartTotal: {
    fontSize: '2rem',
    color: '#fe7448',

  },

  orange__cartIconBtn: {
    backgroundColor: 'rgba(254, 116, 72, 0.25)',
    marginLeft: theme.spacing(4)

  },
  orange__cartIcon: {
    opacity: 1,
    color: '#fe7448'
  }


}))