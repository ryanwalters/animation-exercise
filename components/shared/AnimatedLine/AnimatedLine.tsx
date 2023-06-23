import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dequeueAnimation, selectQueue } from '~/redux/queueSlice';
import { AnimationName, AnimationVariants } from '~/utils/types';

interface AnimatedLineProps {}

const AnimatedLine: FC<AnimatedLineProps> = () => {
  const dispatch = useDispatch();
  const { currentAnimation } = useSelector(selectQueue);
  const variants: AnimationVariants = {
    lineAcross: {
      width: 200,
    },
  };

  return (
    <motion.div
      className="bg-green-500 h-1 rounded mt-2 w-0"
      variants={variants}
      animate={currentAnimation}
      onAnimationComplete={(animationDefinition: AnimationName) => {
        if (Object.keys(variants).includes(animationDefinition)) {
          dispatch(dequeueAnimation());
        }
      }}
    />
  );
};

export default AnimatedLine;
