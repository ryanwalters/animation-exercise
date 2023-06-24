import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import Button from '~/shared/Button/Button';
import ListItem from '~/shared/GroupedList/ListItem/ListItem';
import { AnimationName } from '~/utils/types';
import styles from './GroupedList.module.scss';

interface GroupedListProps {}

const GroupedList: FC<GroupedListProps> = () => {
  const [items, setItems] = useState<number[]>([]);
  const listItemsRef = useRef<HTMLDivElement>(null);
  const lonelyItemRef = useRef<HTMLDivElement>(null);
  const lonelyItemVariants = {
    itemDown: () => {
      const y =
        (listItemsRef.current?.getBoundingClientRect().y ?? 0) -
        (lonelyItemRef.current?.getBoundingClientRect().y ?? 0);

      return {
        y,
      };
    },
  };

  useEffect(() => {
    console.log(listItemsRef.current?.getBoundingClientRect());
    console.log(lonelyItemRef.current?.getBoundingClientRect());
  }, []);

  return (
    <>
      <div className="flex gap-1">
        <Button onClick={() => setItems((prevItems) => [Math.random() * (150 - 50) + 50, ...prevItems])}>
          Add item
        </Button>
        <Button onClick={() => setItems((prevItems) => prevItems.filter((_, i, array) => i !== 0))}>Remove item</Button>
      </div>

      <div
        className={classNames(' border-2 border-slate-400 rounded-3xl w-[500px] h-[500px] p-8', styles.GroupedList)}
        data-testid="GroupedList"
      >
        <AnimatePresence>
          <motion.div
            layout
            className="h-[30px] rounded-lg bg-emerald-300 border-2 border-emerald-600 w-[100px]"
            ref={lonelyItemRef}
            animate="itemDown"
            variants={lonelyItemVariants}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>

        <div className="flex flex-wrap content-start mt-10 gap-3" ref={listItemsRef}>
          <AnimatePresence>
            {items.map((width, i) => (
              <ListItem key={width} width={width} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default GroupedList;
