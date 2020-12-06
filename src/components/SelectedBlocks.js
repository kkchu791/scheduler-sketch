import React from 'react';
import styles from './SelectedBlocks.module.scss';

export const SelectedBlocks = ({
  selectedBlocks,
}) => {

  const renderSBlock = (sBlock, index) => {
    return (
      <div className={styles.sBlock} key={`${index}-${sBlock.id}`}>
        {sBlock.start_time} - {sBlock.end_time}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Selected Blocks
      </h1>

      {selectedBlocks.map((sBlock, index) => renderSBlock(sBlock, index))}
    </div>
  )
}

export default SelectedBlocks;