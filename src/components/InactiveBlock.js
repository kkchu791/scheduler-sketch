import React from 'react';
import styles from './InactiveBlock.module.scss';
import { blockStatuses } from '../constants/blocks';
import clsx from 'clsx';

export const InactiveBlock = ({
  setStatus,
  status,
  isDisabled,
})  => {
  const handleClick = (evt) => {
    evt.stopPropagation();

    if (isDisabled) {
      return;
    }

    if (status === 'active') {
      return;
    }
    setStatus(blockStatuses[3]);
  }


  return (
    <div 
      className={clsx(
        styles.container,
        {[styles.disabled]: isDisabled}
      )}
      onClick={(evt) => handleClick(evt)}


    >
      
    </div>
  )
}