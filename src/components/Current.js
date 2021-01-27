import React from 'react';
import styles from './Current.module.scss';
import {Upcoming} from './Upcoming';
import {Network} from './Network';

export const Current = ({
  setSelectedBlocks
}) => {
  return (
    <div className={styles.container}>
      <Upcoming
        setSelectedBlocks={setSelectedBlocks}
      />
      <Network />
    </div>
  )
}

export default Current;
