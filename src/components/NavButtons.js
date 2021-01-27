import React from 'react';
import styles from './NavButtons.module.scss';
import { Button, IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const NavButtons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeZoneButton}>
      <Button
          onClick={() => console.log('time zone button clicked')}
          color="primary"
          variant="contained"
        >
          PST
        </Button>
      </div>

      <div className={styles.todayButton}>
        <Button
          onClick={() => console.log('today button clicked')}
          color="primary"
          variant="outlined"
        >
          Today
        </Button>
      </div>

      <div className={styles.navButtons}>
        <IconButton color='primary'>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton color='primary'>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default NavButtons;