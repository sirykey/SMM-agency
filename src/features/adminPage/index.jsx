import React, { useState } from 'react';
// import styles from './style.module.css';

function Index(props) {
  const admin = {
    name: 'admin',
    surname: 'admin',
  };

  const [worker, setWorker] = useState('');

  const workerInputChange = (e) => {
    setWorker(e.target.value);
  };

  return (
    <div>
      {admin.name}
      <br />
      {admin.surname}
      <div>
        <input
          type="text"
          placeholder="введите логин работника"
          value={worker}
          onChange={workerInputChange}
        />
        <button>+</button>
      </div>
    </div>
  );
}

export default Index;
