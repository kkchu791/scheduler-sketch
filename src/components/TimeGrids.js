import React, {useRef, useEffect, useState} from 'react';
import styles from './TimeGrids.module.scss';
import {convertTimeTo24, roundMinutes} from '../utils';
import clsx from 'clsx';

export const TimeGrids = ({
  timeBlocks,
}) => {
  const target = useRef(null);
  const [userTime, setUserTime] = useState(roundMinutes(new Date()));

  useEffect(() => {    
    if (target.current) {
      target.current.scrollIntoView();
    }
  }, [target.current]);

  const renderTimeGrid = (timeBlock) => {
    const startTime = convertTimeTo24(timeBlock.start_time).split(":");

    if (parseInt(startTime[1]) > 0) {
      return (
        <div
          className={clsx(styles.timeGrid, styles.minutes)}
          key={timeBlock.start_time}
        >
          :{startTime[1]}
        </div>
      ) 
    } else {
      return (
        <div
          className={styles.timeGrid}
          key={timeBlock.start_time}
          ref={timeBlock.start_time === userTime ? target : null}
        >
          {startTime[0]}{startTime[2]}
        </div>
      )
    }
  }
  return (
    <div className={styles.container}>
      {timeBlocks.map(renderTimeGrid)}
    </div>
  )
}

export default TimeGrids;