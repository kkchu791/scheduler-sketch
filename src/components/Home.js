import React from 'react';
import styles from './Home.module.scss';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Pair Up</h1>
        <h3>A Co-Working Scheduler</h3>
      </div>
     


      <div className={styles.authButtons}>
        <div className={styles.signUpButton}>
          <Link  className={styles.signUpButton} to="/signup">Sign Up</Link>
        </div>

        <div className={styles.loginButton}>
          <Link className={styles.loginButton} to="/login">Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
