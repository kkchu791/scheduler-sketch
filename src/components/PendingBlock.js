import React from 'react';
import { Button } from '@material-ui/core';
import { blockStatuses } from '../constants/blocks';
import styles from './PendingBlock.module.scss';
import { createBlock } from '../api/blocks';
import { useAuthState } from '../context';

export const PendingBlock = ({
  setStatus,
  setSelectedBlocks,
  timeBlock,
  date,
  setBlock
}) => {
  const {userDetails} = useAuthState();
  const handleBook = async (evt) => {
    evt.stopPropagation();
    const response = await createBlock({
      creator_id: userDetails.id,
      time_block_id: timeBlock.id,
      date
    });

    setSelectedBlocks(prevState => {
      if (prevState[date]) {
        prevState[date] = [...prevState[date], response.data];
      } else {
        prevState[date] = [response.data];
      }
      return prevState;
    });

    setBlock(response.data);
    setStatus(blockStatuses[1]);
  }

  const handleCancel = (evt) => {
    evt.stopPropagation();
    setStatus(blockStatuses[0]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bookButton}>
        <Button
          variant="contained"
          color="primary"
          onClick={(evt) => handleBook(evt)}
        >
          Book?
        </Button>
      </div>

      <div className={styles.cancelButton}>
        <Button
          variant="contained"
          color="secondary"
          onClick={(evt) => handleCancel(evt)}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default PendingBlock;