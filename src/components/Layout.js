import React from 'react';
import {NavBar} from './NavBar';
import styles from './Layout.module.scss';

export const Layout = ({
  children
}) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout;