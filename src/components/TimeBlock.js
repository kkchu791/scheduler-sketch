import React from 'react';
import styles from './TimeBlock.module.scss';

export const TimeBlock = ({
  block
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.time}>
        {block.start_time} - {block.end_time}
      </div>
    </div>
  )
}

export default TimeBlock;



