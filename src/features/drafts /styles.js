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
    marginBottom: theme.spacing(3),
    display: 'flex',
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

  containerForButtons: {
    justifyContent: 'flex-end',
  },

  btn: {
    marginTop: 5,
  },
}));

export const useEditDraftStyles = makeStyles((theme) => ({
  containerForEditDraftsComponent: {},

  form: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },

  editor: {
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },

  root: {
    margin: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    display: 'flex',
  },

  EditingTitle: {
    marginTop: theme.spacing(12),
  },

  containerForButtons: {
    justifyContent: 'flex-end',
  },

  btn: {
    alignSelf: 'flex-end',
    marginLeft: 3,
  },

  blockForPostImg: {
    justifyContent: 'center',
    maxWidth: 500,
    maxHeight: 700,
    marginLeft: 2,
  },

  gridForAddingPictures: {
    zIndex: 10,
    position: 'relative',
    bottom: 350,
    left: 170,
    '&:hover': {
      background: 'black',
    },
  },

  picture: {
    padding: theme.spacing(4),
  },

  postImg: {
    width: '100%',
  },
}));

export const useAddDraftStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

  containerForBtns: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(5),
  },

  btn: {
    marginTop: 3,
  },

  addingTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },

  form: {
    padding: theme.spacing(5),
  },

  editor: {
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));
