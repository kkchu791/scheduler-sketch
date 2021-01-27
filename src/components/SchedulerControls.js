import React from 'react';
import styles from './SchedulerControls.module.scss';
import { Button } from '@material-ui/core';
import { NavButtons } from './NavButtons';

export const SchedulerControls = ({
  startDate,
  endDate,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.navButtons}>
        <NavButtons />
      </div>

      <div className={styles.datesShowing}>
        {startDate.toLocaleString('default', { month: 'long' })} {startDate.getDate()} -
        {endDate.toLocaleString('default', { month: 'long' })} {endDate.getDate()}
      </div>

      <div className={styles.view}>
        <Button
          onClick={() => console.log('changing views')}
          variant="contained"
          color="primary"
        >
          Day
        </Button>
      </div>
    </div>
  )
}

export default SchedulerControls;