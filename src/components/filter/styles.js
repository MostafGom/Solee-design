import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  filter: {
    margin: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor: '#2b2f55',
    padding: theme.spacing(2)
  },
  filterByContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  filterBy: {
    padding: theme.spacing(1),
    backgroundColor: '#202342',
    color: 'white',
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}))