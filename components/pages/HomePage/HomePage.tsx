import React, { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queueAnimation, selectQueue } from '~/redux/queueSlice';
import AnimatedLine from '~/shared/AnimatedLine/AnimatedLine';
import BoxGroup from '~/shared/BoxGroup/BoxGroup';

/**
 * Notes:
 * - <Reorder> component: inline multi-line, css grid
 * - run animations in parallel
 * - dequeue animations running in parallel
 */

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const queue = useSelector(selectQueue);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(queue);
  }, [queue]);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div>
        <button
          className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 mb-4 p-3 rounded-lg mr-3"
          onClick={() => dispatch(queueAnimation(['tilesIn', 'tilesCombine', 'lineAcross']))}
        >
          Animate!
        </button>
        In queue: {queue.animations.length}
      </div>
      <BoxGroup />
      <AnimatedLine />
    </div>
  );
};

export default HomePage;
