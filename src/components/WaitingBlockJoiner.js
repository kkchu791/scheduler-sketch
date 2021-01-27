import React from 'react';
import { blockStatuses } from '../constants/blocks';
import { Button } from '@material-ui/core';
import styles from './WaitingBlockJoiner.module.scss';
import { updateBlock } from '../api/blocks';
import { createRoom } from '../api/rooms';

export const WaitingBlockJoiner = ({
  setSelectedBlocks,
  block,
  date,
  setStatus,
  setBlock,
  userDetails,
}) => {

  if (!block) {
    return;
  }

  const updateList = (list, block) => {
    list.forEach((bl, index) => {
      if (bl.id === block.id) {
        list[index] = block;
      }
    });
  }

  const joinClick = async (evt) => {
    evt.stopPropagation();
    let roomResponse = await createRoom();

    let response = await updateBlock({
      joinerId: userDetails.id,
      blockId: block.id,
      roomUrl: roomResponse.data.url,
    });

    setSelectedBlocks(prevState => {
      updateList(prevState[date], response.data);
      return prevState;
    });

    setBlock(response.data);
    setStatus(blockStatuses[2]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.blockInfo}>
        <div className={styles.name}>
          {block.creator_name}
        </div>
      </div>

      <div className={styles.blockButton}>
        <Button
          variant="contained"
          color="primary"
          className='joinButton'
          onClick={(evt) => joinClick(evt)}
        >
          Join
        </Button>
      </div>
    </div>
  )
}

export default WaitingBlockJoiner;