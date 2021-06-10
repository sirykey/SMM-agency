import { makeStyles } from '@material-ui/core/styles';

export const useCommonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginRight: 20,
    },


  },

  title: {
    paddingLeft: 25,

  }
}));

