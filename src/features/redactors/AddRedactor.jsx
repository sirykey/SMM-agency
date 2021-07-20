import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  ListItem,
  ListItemAvatar,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { signUpRedactor } from './redactorsSlice';
import AddIcon from '@material-ui/icons/Add';

function AddRedactor() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [workerPass, setWorkerPass] = useState('');
  const [workerEmail, setWorkerEmail] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const workerLoginChange = (e) => {
    setLogin(e.target.value);
  };
  const firstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const surnameChange = (e) => {
    setSurname(e.target.value);
  };
  const workerPassChange = (e) => {
    setWorkerPass(e.target.value);
  };
  const workerEmailChange = (e) => {
    setWorkerEmail(e.target.value);
  };

  const handleButtonClick = () => {
    dispatch(
      signUpRedactor({
        username: login,
        name: firstname,
        surname: surname,
        mail: workerEmail,
        password: workerPass,
      }),
      handleClose(),
    );
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Fab size="small" color="primary" aria-label="add">
            <Tooltip title="Добавить нового работника">
              <AddIcon onClick={handleOpen} />
            </Tooltip>
          </Fab>
        </ListItemAvatar>
      </ListItem>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить работника:</DialogTitle>
        <DialogContent>
          <TextField
            autoComplete="firstname"
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={firstname}
            onChange={firstnameChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            value={surname}
            onChange={surnameChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={workerEmail}
            onChange={workerEmailChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            value={login}
            onChange={workerLoginChange}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={workerPass}
            onChange={workerPassChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleButtonClick}>
            Добавить
          </Button>
          <Button color="secondary" onClick={handleClose}>
            Отмена
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddRedactor;
