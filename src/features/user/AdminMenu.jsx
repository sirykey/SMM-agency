import React from 'react';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { IconButton, MenuItem } from '@material-ui/core';

function ProfileMenu() {
  const history = useHistory();

  const [openMenu, setOpenMenu] = React.useState(null);
  const handleClick = (e) => {
    setOpenMenu(e.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <IconButton
        color="inherit"
        edge="end"
        aria-label="open drawer"
        onClick={handleClick}
      >
        <Badge color="secondary">
          <AccountCircle />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={openMenu}
        keepMounted
        open={Boolean(openMenu)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} onClick={() => history.push('/agency')}>
          My Account
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          onClick={() => history.push('/agency/signup')}
        >
          Sign Up
        </MenuItem>
        <MenuItem onClick={handleClose}>Log out</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
