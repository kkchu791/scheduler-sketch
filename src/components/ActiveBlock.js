import React from 'react';
import { blockStatuses } from '../constants/blocks';
import { Button } from '@material-ui/core';
import styles from './ActiveBlock.module.scss';

export const ActiveBlock = ({
  block,
  setStatus,
  setSelectedBlocks,
}) => {

  const handleCancel = (evt) => {
    evt.stopPropagation();
    setStatus(blockStatuses[0])
    removeBlock(block);
  }

  const removeBlock = (block) => {
    setSelectedBlocks(prev => prev.filter(b => b !== block));
  }

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        {block.start_time} - {block.end_time}
      </div>

      <div className={styles.cancel}>
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

export default ActiveBlock;