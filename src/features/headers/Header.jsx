import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteHeader } from './headersSlice';

function Header({ header }) {
  const dispatch = useDispatch();

  const handleDeleteClick = (_id) => {
    dispatch(deleteHeader(_id));
  };
  return (
    <div>
      {header.text}
      <button onClick={handleDeleteClick}>delete</button>
    </div>
  );
}

export default Header;
