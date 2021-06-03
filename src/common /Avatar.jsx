import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfileAvatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginRight: 20
    },
  },
}));

function Avatar({imageUrl}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfileAvatar alt="Remy Sharp" src="https://im0-tub-ru.yandex.net/i?id=68fb829949457e2e74dee578aef5b002&n=13&exp=1"/>
    </div>
  );
}

Avatar.propTypes = {
  imageUrl: PropTypes.string,
};

export default Avatar;
