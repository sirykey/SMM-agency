import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHeader } from '../content/contentSlice';

function Header({ header }) {
  const dispatch = useDispatch();

  const handleDeleteClick = (deletingHeaderId) => {
    dispatch(deleteHeader(deletingHeaderId));
  };
  return (
    <div>
      Title: {header.text}
      <br />
      Text: {header.title}
      <br />
      <button onClick={() => handleDeleteClick(header._id)}>delete post</button>
    </div>
  );
}

export default Header;
