import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';

function Badge() {
  const [openMenu, setOpenMenu] = useState(null);
  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };
  return (
    <div>
      <Fab
        variant="extended"
        size="small"
        color="secondary"
        aria-label="add"
        onClick={handleClick}
      >
        Черновик
      </Fab>
      <Menu
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Пост</MenuItem>
        <MenuItem onClick={handleClose}>Черновик</MenuItem>
      </Menu>
    </div>
  );
}

export default Badge;
