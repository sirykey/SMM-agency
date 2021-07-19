import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useBageStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setCompleted } from '../features/drafts /draftsSlice';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

function Badge({id, isItDraft}) {
  const dispatch = useDispatch()
  const failed = useSelector(state => state.draftsSlice.failed)
  const [openMenu, setOpenMenu] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(null)

  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  };
  
  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(null)
  }

  const handleSetCompleted = () => {
     dispatch(setCompleted(id)).then(() => {
       setOpenSnackbar(true)
     })
  }

  const classes = useBageStyles();

  return (
    <div>
      <Fab
        variant="extended"
        color={isItDraft ? 'primary' : 'secondary'}
        aria-label="add"
        onClick={handleClick}
        className={classes.btn}
      >
        {isItDraft ? 'Черновик' : 'Пост'}
      </Fab>
      <Menu
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSetCompleted}>Пост</MenuItem>
        <MenuItem onClick={handleSetCompleted}>Черновик</MenuItem>
        <Snackbar open={openSnackbar} autoHideDuration={1000} onClose={handleCloseSnackbar}>
          <Alert
            onClose={handleCloseSnackbar}
            severity={failed ? 'error' : 'success'}
          >
            {failed ? 'Произошла ошибка' : 'Пост успешно изменен'}
          </Alert>
        </Snackbar>
      </Menu>
    </div>
  );
}

Badge.propTypes = {
  draft: PropTypes.bool,
};

export default Badge;
