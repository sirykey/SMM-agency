import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHeader, fetchHeaders } from './headersSlice';
import Header from './Header';

function Headers(props) {
  const dispatch = useDispatch();
  const headers = useSelector((state) => state.headersSlice.items);
  console.log(headers);
  const [title, setInputTitle] = useState('');
  const [text, setInputText] = useState('');

  useEffect(() => {
    dispatch(fetchHeaders());
  }, []);

  const handleAddClick = (e) => {
    e.preventDefault();
    dispatch(
      addHeader({
        title: title,
        text: text,
      }),
    );
  };

  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleTxet = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      {headers.map((header) => {
        return <Header key={header._id} header={header} />;
      })}
      <input type="text" value={title} onChange={handleTitle} />
      <input type="text" value={text} onChange={handleTxet} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default Headers;
