import { makeStyles } from '@material-ui/core/styles';

export const useDraftStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  mainGrid: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(3)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  paper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
}));

export const useEditDraftStyles = makeStyles((theme) => ({
  form: {
    margin: theme.spacing(1, 0),
  },
  root: {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))