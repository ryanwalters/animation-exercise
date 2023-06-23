import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import type { FC } from 'react';
import Button from '~/shared/Button/Button';
import ListItem from '~/shared/GroupedList/ListItem/ListItem';
import styles from './GroupedList.module.scss';

interface GroupedListProps {}

const GroupedList: FC<GroupedListProps> = () => {
  const [items, setItems] = useState<number[]>([]);

  return (
    <>
      <div className="flex gap-1">
        <Button onClick={() => setItems((prevItems) => [Math.random() * (150 - 50) + 50, ...prevItems])}>
          Add item
        </Button>
        <Button onClick={() => setItems((prevItems) => prevItems.filter((_, i, array) => i !== 0))}>Remove item</Button>
      </div>
      <AnimatePresence>
        <motion.div
          layout
          className={classNames(
            'flex flex-wrap content-start border-2 border-slate-400 rounded-3xl w-[500px] h-[500px] p-8',
            styles.GroupedList
          )}
          data-testid="GroupedList"
        >
          {items.map((width, i) => (
            <ListItem key={width} width={width} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default GroupedList;
