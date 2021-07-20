import React from 'react';
import PropTypes from 'prop-types';
import { Grid, ListItem } from '@material-ui/core';
import DraftsTitle from './DraftsTitle';
import Badge from '../../common /Badge';
import { useHistory } from 'react-router';
import MainAvatar from '../../common /MainAvatar';

function DraftItem({ draft }) {
  const history = useHistory();
  return (
    <>
      <ListItem>
        <ListItem
          button
          onClick={() => history.push(`/agency/blog/${draft._id}`)}
        >

          <MainAvatar
            size={'classes.small'}
            src="https://im0-tub-ru.yandex.net/i?id=299736ae5da1556ac5a80051c33d564a&n=13&exp=1"
          />
          <DraftsTitle
            title={draft.title}
            name={draft.author.name}
            surname={draft.author.surname}
          />
        </ListItem>
        <Grid item>
          <Badge id={draft._id} isItDraft={draft.draft} />
        </Grid>
      </ListItem>
    </>
  );
}

DraftItem.propTypes = {
  draft: PropTypes.object,
};

export default DraftItem;
