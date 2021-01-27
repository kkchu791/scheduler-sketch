import React from 'react';
import styles from './DateBlock.module.scss';

export const DateBlock = ({
  date,
}) => {
  return (
    <div className={styles.container} key={new Date(date).valueOf()}>
      <div className={styles.dayName}>
        {date.toLocaleDateString('en-US', { weekday: 'short' })}
      </div>
      <div className={styles.dayNumber}>
        {date.getDate()}
      </div>
    </div>
  )
}

export default DateBlock;