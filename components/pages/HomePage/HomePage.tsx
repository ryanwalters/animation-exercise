import React, { type FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queueAnimation, selectQueue } from '~/redux/queueSlice';
import AnimatedLine from '~/shared/AnimatedLine/AnimatedLine';
import BoxGroup from '~/shared/BoxGroup/BoxGroup';
import Button from '~/shared/Button/Button';
import GroupedList from '~/shared/GroupedList/GroupedList';

/**
 * Notes:
 * - <Reorder> component: inline multi-line, css grid
 * - run animations in parallel
 * - dequeue animations running in parallel
 * - https://medium.com/prod-io/sequencing-animations-in-reactjs-9ea0c4263fea
 */

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const queue = useSelector(selectQueue);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log({ animations: queue.animations, currentAnimation: queue.currentAnimation });
  }, [queue]);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div>
        <Button onClick={() => dispatch(queueAnimation(['tilesIn', 'tilesCombine', 'lineAcross']))}>Animate!</Button>
        In queue: {queue.animations.length}
      </div>
      <BoxGroup />
      <AnimatedLine />
      <hr className="my-10 border-white w-[100%]" />
      <GroupedList />
    </div>
  );
};

export default HomePage;
