import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHeader } from './headersSlice';

function Header({ header }) {
  const dispatch = useDispatch();

  const handleDeleteClick = (deletingHeaderId) => {
    dispatch(deleteHeader(deletingHeaderId));
  };
  return (
    <div>
      {header.text}
      {header.title}
      <button onClick={() => handleDeleteClick(header._id)}>delete</button>
    </div>
  );
}

export default Header;
