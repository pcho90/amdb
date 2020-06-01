import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  image: {
    width: '100px'
  },
  appBar: {
    backgroundColor: '#112244'
  },
  search: {
    justifySelf: 'center'
  }
}));
