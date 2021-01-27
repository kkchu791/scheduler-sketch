import React from 'react';
import styles from './Scheduler.module.scss';
import { Day } from './Day';
import { DateBlock } from './DateBlock';
import { SchedulerControls } from './SchedulerControls';
import { TimeGrids } from './TimeGrids';

export const Scheduler = ({
  timeBlocks,
  selectedBlocks,
  dates,
  setSelectedBlocks,
}) => {
  return (
    <div className={styles.container}>
      <SchedulerControls
        startDate={dates[0]}
        endDate={dates[6]}
      />
      <div className={styles.dates}>
        {dates.map(date => <DateBlock date={date} />)}
      </div>
      <div className={styles.grids}>
        <TimeGrids timeBlocks={timeBlocks} />
        {dates.map(date => {
          const formattedDate = date.toISOString().slice(0,10);
          return (
            <Day
              date={formattedDate}
              timeBlocks={timeBlocks}
              setSelectedBlocks={setSelectedBlocks}
              selectedBlocks={selectedBlocks[formattedDate] || []}
              
            />
          )
        })}
      </div>
      
    </div>
  )
}

export default Scheduler;
