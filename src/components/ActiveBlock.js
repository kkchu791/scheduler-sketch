import React from 'react';
import { blockStatuses } from '../constants/blocks';
import { Button } from '@material-ui/core';
import styles from './ActiveBlock.module.scss';
import { removeBlock } from '../api/blocks';
import { convertTimeTo24 } from '../utils';

export const ActiveBlock = ({
  block,
  setStatus = () => null,
  setSelectedBlocks,
  timeBlock,
  date,
  userDetails,
  setBlock,
  isDisabled,
}) => {
  // const handleJoin = async (evt) => {
  //   evt.stopPropagation();
  //   window.location.href = block.room_url;
  // }

  const handleCancel = async (evt) => {
    evt.stopPropagation();
    let response = await removeBlock({
      userId: userDetails.id,
      blockId: block.id
    });

    setSelectedBlocks(prevState => {
      prevState[date] = [...prevState[date], response.data]
      return prevState;
    });

    if (response.data.status) {
      setBlock(response.data)
      setStatus(blockStatuses[1]);
    } else {
      setBlock({})
      setStatus(blockStatuses[0]);
    }
  }

  return (
    <div className={styles.container}>
      {isDisabled ? <div>disabled</div> : 
        <div>
          <div className={styles.blockInfo}>
            <div className={styles.time}>
              {convertTimeTo24(timeBlock.start_time)} - {convertTimeTo24(timeBlock.end_time)}
            </div>
            <div className={styles.name}>
              {block.creator_id === userDetails.id ? block.joiner_name : block.creator_name}
            </div>       
          </div>

          <div className={styles.blockButton}>
            {/* <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={(evt) => handleJoin(evt)}
            >
              Join Session
            </Button> */}
            
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={(evt) => handleCancel(evt)}
            >
              Cancel
            </Button>

          </div>
        </div>
      
      }
      
    </div>
  )
}

export default ActiveBlock;