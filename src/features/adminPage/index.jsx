import React from 'react';
import styles from './style.module.css';

function Index(props) {
  const admin = {
    name: 'admin',
    surname: 'admin',
  };
  return (
    <div className={styles.main}>
      {admin.name}
      <br />
      {admin.surname}
      <div>
        <input type="text" placeholder="введите логин работника" />
        <button>+</button>
      </div>
    </div>
  );
}

export default Index;
