import React from 'react';
import { TimeBlock } from './TimeBlock';
import { SlotBlock } from './SlotBlock';
import styles from './Block.module.scss';

export const Block = ({
  block,
  uniqKey,
  setSelectedBlocks,
}) => {
  return (
    <div className={styles.container} key={uniqKey}>
      <TimeBlock
        block={block}
      />

      <SlotBlock
        block={block}
        setSelectedBlocks={setSelectedBlocks}
      />

    </div>
  )
}

export default Block;