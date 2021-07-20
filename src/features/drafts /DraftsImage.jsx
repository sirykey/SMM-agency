import React from 'react';
import {
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Picture from './images/mockup.png';

const useStyles = makeStyles((theme) => ({
  account: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  avatar: {
    width: '120px',
    height: '120px',
  },
  avatarWrapper: {
    margin: '20px auto',
    display: 'inline-block',
    padding: '10px',
    borderRadius: '50%',
    position: 'relative',
  },
  avatarButton: {
    opacity: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '320px',
    height: '400px',
    position: 'absolute',
    top: '50px',
    transition: '300ms',
    backgroundColor: 'rgba(0,0,0,0.45)',
    '&:hover': {
      opacity: 1,
    },
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    color: 'whitesmoke',
  },
  subtitle: {
    fontSize: '12px',
    textAlign: 'center',
    padding: '10px 50px',
    color: '#6a6a6a',
    marginBottom: '100px',
  },
  input: {
    display: 'none',
  },
}));

function DraftsImage() {
  const classes = useStyles();

  return (
    <div className={classes.account}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />

      <div className={classes.avatarWrapper}>
        <Grid className={classes.picture}>
          <img src={Picture} alt="" />
        </Grid>
        <div className={classes.avatarButton}>
          <label htmlFor="icon-button-file">
            <IconButton
              color="default"
              aria-label="upload picture"
              component="span"
              className={classes.button}
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DraftsImage;
