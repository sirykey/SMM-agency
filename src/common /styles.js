import { makeStyles } from '@material-ui/core/styles';

export const useAvatarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginRight: 20,
    },
  },
}));
