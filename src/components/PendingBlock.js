import React from 'react';
import { Button } from '@material-ui/core';
import { blockStatuses } from '../constants/blocks';
import styles from './PendingBlock.module.scss';

export const PendingBlock = ({
  setStatus,
  setSelectedBlocks,
  block,
}) => {
  const handleBook = (evt) => {
    evt.stopPropagation();
    setSelectedBlocks(prevState => [...prevState, block])
    setStatus(blockStatuses[2]);
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