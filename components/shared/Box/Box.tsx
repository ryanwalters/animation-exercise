import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { AnimationVariants } from '~/utils/types';

interface BoxProps {
  index: number;
  totalBoxes: number;
}

const Box: FC<BoxProps> = ({ index, totalBoxes }) => {
  const variants: AnimationVariants = {
    tilesIn: { y: [25, 0], opacity: 1 },
    tilesCombine: (i) => ({
      ...(i === 0 && {
        borderRadius: '4px 0 0 4px',
      }),
      ...(i === totalBoxes - 1 && {
        borderRadius: '0 4px 4px 0',
      }),
      ...(i !== 0 &&
        i !== totalBoxes - 1 && {
          borderRadius: 0,
        }),
      height: 25,
      marginLeft: 0,
      marginRight: 0,
      width: 25,
    }),
  };

  return (
    <motion.div
      className="bg-yellow-500 rounded-lg mx-1 opacity-0 h-[50px] w-[50px] inline-flex"
      variants={variants}
      custom={index}
    />
  );
};

export default Box;
