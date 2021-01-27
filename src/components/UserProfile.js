import React from 'react';
import styles from './UserProfile.module.scss';
import image from '../images/demo.jpg';

export const UserProfile = ({
  match
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.userPhoto}>
        <img className={styles.userPhoto} src={image} alt='demo' />
      </div>

      <div className={styles.genInfo}>
        <div className={styles.userName}>
          Sam Rockwell
        </div>

        <div className={styles.place}>
          Brooklyn, NY
        </div>

        <div className={styles.identity}>
          Music Producer
        </div>
      </div>
    </div>
  )
}