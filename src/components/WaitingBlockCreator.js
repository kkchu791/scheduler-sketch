import React from 'react';
import { blockStatuses } from '../constants/blocks';
import { Button } from '@material-ui/core';
import styles from './WaitingBlockCreator.module.scss';
import { removeBlock } from '../api/blocks';
import {convertTimeTo24} from '../utils';

export const WaitingBlockCreator = ({
  timeBlock,
  setSelectedBlocks,
  block,
  date,
  setStatus,
  userDetails,
  setBlock,
}) => {
  const cancelClick = async (evt) => {
    evt.stopPropagation();
    let response = await removeBlock({
      userId: userDetails.id,
      blockId: block.id,
    });

    //needs to remove the block from the selectedBlocksList by the id
    setSelectedBlocks(prevState => {
      const newList = prevState[date].filter(bl => bl.id !== response.data.id);
      prevState[date] = newList;
      return prevState;
    });

    setBlock({})
    setStatus(blockStatuses[0]);
  }


  return (
    <div className={styles.container}>
      <div className={styles.blockInfo}>
        <div className={styles.time}>
          {convertTimeTo24(timeBlock.start_time)} - {convertTimeTo24(timeBlock.end_time)}
        </div>
        <div className={styles.name}>
          Matching...
        </div>
      </div>

      <div className={styles.blockButton}>
        <Button
          variant="contained"
          color="secondary"
          className='cancelButton'
          onClick={(evt) => cancelClick(evt)}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default WaitingBlockCreator;