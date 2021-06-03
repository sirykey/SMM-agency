import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
} from '@material-ui/core';
import PageTitle from '../../common /PageTitle';
import Avatar from '../../common /Avatar';

function DraftItem({ draft }) {
  return (
    <>
      <ListItem button>
        <Avatar />
        <PageTitle
          title={draft.title}
          name={draft.author.name}
          surname={draft.author.surname}
        />
      </ListItem>
    </>
  );
}

DraftItem.propTypes = {
  draft: PropTypes.object,
};

export default DraftItem;
