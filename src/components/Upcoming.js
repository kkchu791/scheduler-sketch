import React, { useState, useEffect } from 'react';
import styles from './Upcoming.module.scss';
import { getUpcomingBlock as getUpcomingBlockApi  } from '../api/blocks';
import { useAuthState } from '../context';
import { UpcomingBlock } from './UpcomingBlock';
import { Timer } from './Timer';

export const Upcoming = () => {
  const {userDetails} = useAuthState();
  const [block, setBlock] = useState(null);

  useEffect(() => {
    getUpcomingBlock();
  }, [])

  const getUpcomingBlock = async () => {
    const response = await getUpcomingBlockApi({
      userId: userDetails.id,
    });

    if (response.data) {
      setBlock(response.data)
    } else {
      setBlock(null);
    }
  };

  let tenMinutesRemaining;
  let targetTime;
  if (block) {
    const dateStr = new Date(block.date).toISOString().slice(0,10);    
    const timeStr = block.start_time;
    targetTime = dateStr + ' ' + timeStr;
    tenMinutesRemaining = (new Date(targetTime).getTime() - new Date().getTime()) < 600000;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Current
      </div>

      <div className={styles.upcomingBlock}>
        {tenMinutesRemaining &&
          <div className={styles.timer}>
            Starts in{'\u00A0'}<Timer targetTime={targetTime} />
          </div>
        }

        {block ? 
          <UpcomingBlock
            block={block}
            userDetails={userDetails}
            tenMinutesRemaining={tenMinutesRemaining}
          />
        
          :

          <div> No upcoming blocks</div>
        }
      </div>
    </div>
  )
}

export default Upcoming;
