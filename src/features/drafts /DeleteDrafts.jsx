import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { deleteDraft } from './draftsSlice';
import { useEditDraftStyles } from './styles';
import { useHistory } from 'react-router';

function DeleteDrafts({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const classes = useEditDraftStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteDraft(id)).then(() => {
      history.push('/agency');
    });
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        className={classes.btn}
        onClick={handleOpen}
      >
        Удалить
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={'md'}
      >
        <DialogTitle id="alert-dialog-title">Удалить черновик</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверенны
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(id)} color="primary">
            Да
          </Button>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteDrafts;
