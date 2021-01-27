import React from 'react';
import styles from './UpcomingBlock.module.scss';
import {convertTimeTo24} from '../utils';
import { Button } from '@material-ui/core';

export const UpcomingBlock = ({
  block,
  userDetails,
  tenMinutesRemaining,
}) => {

  const handleButtonClick = () => {
    console.log('handle button click');
  }

  return (
    <div className={styles.container}>
      <div className={styles.blockInfo}>
        <div className={styles.time}>
          {block.start_time && convertTimeTo24(block.start_time)} - {block.end_time && convertTimeTo24(block.end_time)}
        </div>
        <div className={styles.name}>
          {block.creator_id === userDetails.id ? block.joiner_name : block.creator_name}
        </div>       
      </div>

      <div className={styles.buttons}>
        {tenMinutesRemaining &&
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleButtonClick()}
          >
            Join Session
          </Button>
        }
      </div>
    </div>
  )
}

export default UpcomingBlock;
