import React from 'react';
import styles from './Day.module.scss';
import clsx from 'clsx';
import { SlotBlock } from './SlotBlock';

export const Day = ({
  date,
  timeBlocks,
  setSelectedBlocks,
  selectedBlocks,
}) => {
  const renderTimeBlock = (timeBlock) => {
    return (
      <div key={timeBlock.id}>
        <SlotBlock
          timeBlock={timeBlock}
          setSelectedBlocks={setSelectedBlocks}
          selectedBlocks={selectedBlocks}
          date={date}
        />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={clsx(styles.dayColumn, date)}>
        <div className={styles.blocks}>
          {timeBlocks.map(renderTimeBlock)}
        </div>
      </div>
    </div>
  )
}

export default Day;
