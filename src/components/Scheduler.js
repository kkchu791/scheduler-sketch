import React, { useState } from 'react';
import styles from './Scheduler.module.scss';
import { blocks } from '../constants/scheduler';
import { Block } from './Block';
import { SelectedBlocks } from './SelectedBlocks';

export const Scheduler = () => {

  const [selectedBlocks, setSelectedBlocks] = useState([])
  const renderBlock = (block) => {
    return (
      <div key={block.id}>
        <Block
          block={block}
          uniqKey={block.id}
          setSelectedBlocks={setSelectedBlocks}
        />
      </div>
    )
  }

  return (
    <div className={styles.container}>

      <h1 className={styles.title}>
        Scheduler
      </h1>

      <div className={styles.schedContainer}>
        <div className={styles.blocks}>
          {blocks.map(renderBlock)}
        </div>

        <div className={styles.selectedBlocks}>
          <SelectedBlocks
            selectedBlocks={selectedBlocks}
          />
        </div>
      </div>
    </div>
  )
}

export default Scheduler;