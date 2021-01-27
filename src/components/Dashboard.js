import React, {useState, useEffect, useCallback} from 'react';
import styles from './Dashboard.module.scss';
import { Scheduler } from './Scheduler';
import { Current } from './Current';
import { Events } from './Events';
import { getTimeBlocks as getTimeBlocksApi } from '../api';
import { getBlocksByDateRange as getBlocksByDateRangeApi } from '../api/blocks';
import { startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

export const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [timeBlocks, setTimeBlocks] = useState([])
  const [selectedBlocks, setSelectedBlocks] = useState({});

  const getDates = useCallback(() => {
    const start = startOfWeek(date, {weekStartsOn: 1});
    const end = endOfWeek(date, {weekStartsOn: 1});

    return eachDayOfInterval({start, end});
  }, [date]);

  const getBlocksByDateRange = useCallback(async () => {
    const dates = getDates();
    const startDate = dates[0].toISOString().slice(0,10);
    const endDate = dates[6].toISOString().slice(0,10);
    const blocks = await getBlocksByDateRangeApi({startDate, endDate});
    setSelectedBlocks(blocks.data);
  }, [getDates]);

  const getTimeBlocks = useCallback(async () => {
    const timeBlocks = await getTimeBlocksApi();
    setTimeBlocks(timeBlocks.data);
  }, []);

  useEffect(() => {
    getTimeBlocks();
    getBlocksByDateRange();
  }, [getBlocksByDateRange, getTimeBlocks]);

  return (
    <div className={styles.container}>
      <Current
        setSelectedBlocks={setSelectedBlocks}
      />
      <Scheduler
        timeBlocks={timeBlocks}
        selectedBlocks={selectedBlocks}
        setDate={setDate}
        dates={getDates()}
        setSelectedBlocks={setSelectedBlocks}
      />
      <Events />
    </div>
  )
}

export default Dashboard;
