import React, { useState, useEffect } from 'react';
import { PendingBlock } from './PendingBlock';
import { ActiveBlock } from './ActiveBlock';
import { WaitingBlockCreator } from './WaitingBlockCreator';
import { WaitingBlockJoiner } from './WaitingBlockJoiner';
import { InactiveBlock } from './InactiveBlock';
import styles from './SlotBlock.module.scss';
import { blockStatuses } from '../constants/blocks';
import { useAuthState } from '../context';
import clsx from 'clsx';
import {isStartOfHour} from '../utils';

export const SlotBlock = ({
  timeBlock,
  setSelectedBlocks,
  selectedBlocks,
  date,
}) => {
  const [status, setStatus] = useState(blockStatuses[0]);
  const [block, setBlock] = useState({});
  const {userDetails} = useAuthState();
  const isCreator = block && userDetails.id === block.creator_id;

  useEffect(() => {
    const selectedBlock = selectedBlocks.find(sBlock => {
      return sBlock.time_block_id === timeBlock.id;
    })

    if (selectedBlock) {
      setStatus(blockStatuses[selectedBlock.status]);
    }

    setBlock(selectedBlock);

  }, [selectedBlocks, timeBlock.id]);

  const BLOCKS = {
    'inactive': null,
    'pending': <PendingBlock
                setStatus={setStatus}
                setSelectedBlocks={setSelectedBlocks}
                timeBlock={timeBlock}
                date={date}
                setBlock={setBlock}
              />,
    'waiting': isCreator ? <WaitingBlockCreator
                              setStatus={setStatus}
                              setSelectedBlocks={setSelectedBlocks}
                              timeBlock={timeBlock}
                              block={block}
                              date={date}
                              setBlock={setBlock}
                              userDetails={userDetails}
                            /> :
                            <WaitingBlockJoiner
                              setStatus={setStatus}
                              setSelectedBlocks={setSelectedBlocks}
                              timeBlock={timeBlock}
                              block={block}
                              date={date}
                              setBlock={setBlock}
                              userDetails={userDetails}
                            /> ,
    'active': <ActiveBlock
                setStatus={setStatus}
                timeBlock={timeBlock}
                setSelectedBlocks={setSelectedBlocks}
                block={block}
                date={date}
                userDetails={userDetails}
                setBlock={setBlock}
                isDisabled={new Date(date + ' ' + timeBlock.end_time) < new Date()}
              />,
  }

  return (
    <div
      className={clsx(
        styles.container,
        {[styles.hourStart]: isStartOfHour(timeBlock.start_time)},
        {[styles.minuteGrid]: !isStartOfHour(timeBlock.start_time)}
      )}
      key={timeBlock.id}
    >
      <InactiveBlock
        setStatus={setStatus}
        status={status}
        isDisabled={new Date(date + ' ' + timeBlock.start_time) < new Date()}
      />
      {BLOCKS[status]}
    </div>
  )
}

export default SlotBlock;