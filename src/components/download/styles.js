import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  download: {
    padding: theme.spacing(3),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: '#2b2f55',
    color: 'white',
  },
  downloadBtn: {
    color: 'white',
    backgroundColor: '#1ec1c3',
    padding: theme.spacing(1),
    margin: theme.spacing(2),

  }

}))