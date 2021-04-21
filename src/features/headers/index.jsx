import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaders } from './headersSlice';
import Header from './Header';

function Headers(props) {
  const dispatch = useDispatch();
  const headers = useSelector((state) => state.headersSlice.items);
  console.log(headers);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    dispatch(fetchHeaders());
  }, []);

  const handleAddClick = (text) => {
    dispatch(addHeader(text));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {headers.map((header) => {
        return <Header key={header._id} header={header} />;
      })}
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default Headers;
