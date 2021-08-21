import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  DashContainer: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: '#202342',
    borderRadius: theme.spacing(1),
    color: 'white',
    maxHeight: '90vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: '8px'
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: 'whitesmoke'
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'lightgrey'
    },


  },

  DasboardAPPbar: {
    backgroundColor: '#2b2f55',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },

  DashboarcContent: {
    padding: theme.spacing(2),

  },



  success: {
    backgroundColor: 'rgba(30, 193, 195, 0.25)',
    color: '#63f4f7',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(0.5),
    fontSize: '0.9rem'

  },
  failure: {
    backgroundColor: 'rgba(254, 116, 72, 0.25)',
    color: '#fe7448',
    padding: theme.spacing(1),
    fontSize: '0.9rem',
    borderRadius: theme.spacing(0.5),


  },
}))