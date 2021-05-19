import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { changeDraft } from '../content/contentSlice';
import { useDispatch } from 'react-redux';

function ChangePostDialog(props) {
  const dispatch = useDispatch();
  const handleChange = (id) => {
    dispatch(changeDraft(id));
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Добавить черновик в пост'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверенны
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleChange(props.id)} color="primary">
            Да
          </Button>
          <Button onClick={props.handleClose} color="secondary" autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ChangePostDialog;
