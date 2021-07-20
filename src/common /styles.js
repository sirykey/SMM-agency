import { makeStyles } from '@material-ui/core/styles';

export const useProfileStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(1),
    justifyContent: 'center',
  },

  formContainer: {},
  paper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 'auto',
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },

  gridForAvatar: {
    padding: theme.spacing(4),
  },
}));

export const useAvatarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  small: {
      margin: theme.spacing(1),

  },
  large: {
    width: '120px',
    height: '120px',
  },

  title: {
    paddingLeft: 25,
  },
}));

export const useBageStyles = makeStyles((theme) => ({
  btn: {
    width: theme.spacing(13),
    height: theme.spacing(5),
    fontSize: theme.spacing(1.6),
    fontWeight: 600
  }
}));


