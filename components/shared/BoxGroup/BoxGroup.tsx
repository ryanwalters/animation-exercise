import { AnimationDefinition, motion } from 'framer-motion';
import React, { FC } from 'react';
import Box from '~/shared/Box/Box';

const NUMBER_OF_BOXES = 7;
const boxLengthArray = Array(NUMBER_OF_BOXES).fill(1);

interface BoxGroupProps {
  variant: string;
}

const BoxGroup: FC<BoxGroupProps> = ({ variant }) => {
  const variants = {
    default: {},
    slideDown: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="default"
      variants={variants}
      animate={variant}
      onAnimationComplete={(animationDefinition: AnimationDefinition) => {
        if (animationDefinition === 'slideDown') {
          console.log(`animations/removeFromQueue: ${animationDefinition}`);
        }
      }}
    >
      {boxLengthArray.map((_, i) => (
        <Box key={i} />
      ))}
    </motion.div>
  );
};

export default BoxGroup;
