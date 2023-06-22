import { motion } from 'framer-motion';
import React, { FC } from 'react';
import styles from './Box.module.scss';

interface BoxProps {}

const Box: FC<BoxProps> = () => {
  const variants = {
    default: { y: 25 },
    slideDown: { y: 0, opacity: 1 },
  };

  return (
    <motion.div className="bg-yellow-500 rounded-lg mx-1 opacity-0 h-[50px] w-[50px] inline-flex" variants={variants} />
  );
};

export default Box;
