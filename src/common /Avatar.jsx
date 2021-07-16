import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { PropTypes } from 'prop-types';
import { useAvatarStyles } from './styles';

 function ImageAvatars({ size }) {
  const classes = useAvatarStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="https://img.favpng.com/23/14/13/avatar-computer-icons-logo-png-favpng-cn0QQR4duut7PZicNCY4KtB1H.jpg"
        className={size}
      />
    </div>
  );
}

Avatar.propTypes = {
  imageUrl: PropTypes.string,
};

export default ImageAvatars;
