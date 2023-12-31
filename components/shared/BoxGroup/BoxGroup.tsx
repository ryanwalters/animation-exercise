import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dequeueAnimation, selectQueue } from '~/redux/queueSlice';
import Box from '~/shared/Box/Box';
import { AnimationName, type AnimationVariants } from '~/utils/types';

const NUMBER_OF_BOXES = 7;
const boxLengthArray = Array(NUMBER_OF_BOXES).fill(1);

interface BoxGroupProps {}

const BoxGroup: FC<BoxGroupProps> = () => {
  const { currentAnimation } = useSelector(selectQueue);
  const dispatch = useDispatch();
  const variants: AnimationVariants = {
    tilesIn: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    tilesCombine: {},
  };

  return (
    <motion.div
      variants={variants}
      animate={currentAnimation}
      onAnimationComplete={(animationDefinition: AnimationName) => {
        if (Object.keys(variants).includes(animationDefinition)) {
          dispatch(dequeueAnimation());
        }
      }}
    >
      {boxLengthArray.map((_, i) => (
        <Box key={i} index={i} totalBoxes={boxLengthArray.length} />
      ))}
    </motion.div>
  );
};

export default BoxGroup;
