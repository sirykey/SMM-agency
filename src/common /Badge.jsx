import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useBageStyles } from './styles';
import { useDispatch } from 'react-redux';
import { setCompleted } from '../features/drafts /draftsSlice';

function Badge({id, isItDraft}) {
  const dispatch = useDispatch()
  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  };
  
  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleSetCompleted = () => {
     dispatch(setCompleted({ id, isItDraft }))
       .then(() => setOpenMenu(false))


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
      </Menu>
    </div>
  );
}

Badge.propTypes = {
  draft: PropTypes.bool,
};

export default Badge;
