import React, { useState } from 'react';
import { PendingBlock } from './PendingBlock';
import { ActiveBlock } from './ActiveBlock';
import styles from './SlotBlock.module.scss';
import { blockStatuses } from '../constants/blocks';

export const SlotBlock = ({
  block,
  setSelectedBlocks,
}) => {
  const [status, setStatus] = useState(blockStatuses[0]);

  const BLOCKS = {
    'inactive': null,
    'pending': <PendingBlock setStatus={setStatus} setSelectedBlocks={setSelectedBlocks} block={block}/>,
    'active': <ActiveBlock setStatus={setStatus} block={block} setSelectedBlocks={setSelectedBlocks} />,
  }

  const handleClick = () => {
    if (status === 'active') {
      return;
    }

    setStatus(blockStatuses[1]);
  }

  return (
    <div
      className={styles.container}
      onClick={() => handleClick()}
    >
      {BLOCKS[status]}
    </div>
  )
}

export default SlotBlock;