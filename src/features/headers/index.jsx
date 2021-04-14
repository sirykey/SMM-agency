import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaders } from './headersSlice';
import Header from './Header';

function Headers(props) {
  const dispatch = useDispatch();
  const headers = useSelector((state) => state.headersSlice.items);
  console.log(headers);

  useEffect(() => {
    dispatch(fetchHeaders());
  }, []);

  return (
    <div>
      {headers.map((header) => {
        return <Header key={header._id} header={header} />;
      })}
    </div>
  );
}

export default Headers;
