import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListItem } from '@material-ui/core';
import DraftsTitle from './DraftsTitle';
import Avatar from '../../common /Avatar';
import Badge from '../../common /Badge';
import { useHistory } from 'react-router';

function DraftItem({ draft }) {
  const history = useHistory();

  return (
    <>
      <ListItem button onClick={() => history.push(`/agency/blog/${draft._id}`)}>
        <Avatar />
        <DraftsTitle
          title={draft.title}
          name={draft.author.name}
          surname={draft.author.surname}
        />
        <Grid>
          <Badge />
        </Grid>
      </ListItem>
    </>
  );
}

DraftItem.propTypes = {
  draft: PropTypes.object,
};

export default DraftItem;
