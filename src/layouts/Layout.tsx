import React from 'react';

import styles from '../styles/Layout.module.scss';

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header} />
    {children}
    <footer className={styles.footer} />
  </div>
);

export default Layout;
