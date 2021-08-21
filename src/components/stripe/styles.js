import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  stripe: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(12),
    margin: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: '#2b2f55',
    color: 'white',
  },
  visiblityIcon: {
    color: '#1ec1c3',
  },

  payment: {
    display: 'flex'
  },

  renewBtn: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#01a9f4',
    color: 'white',
    marginTop: theme.spacing(2)
  },
  declineBetn: {
    padding: theme.spacing(1),
    backgroundColor: '#323662',
    marginTop: theme.spacing(2)

  }
}))