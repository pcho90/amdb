import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '0'
  },
  padding: {
    padding: theme.spacing(3)
  },
  tabs: {
    backgroundColor: 'white'
  },
  image: {
    width: '100%'
  }
}));