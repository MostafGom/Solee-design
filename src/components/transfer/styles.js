import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  discord: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: '#2b2f55',
    color: 'white',
  },
  transferBetn: {
    padding: theme.spacing(1),
    backgroundColor: '#323662',
    color: '#1ec1c3',
    marginTop: theme.spacing(6)

  }
}))