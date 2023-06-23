import { motion } from 'framer-motion';
import type { FC } from 'react';

interface ListItemProps {
  width: number;
}

const ListItem: FC<ListItemProps> = ({ width }) => (
  <motion.div
    layout
    className="h-[30px] rounded-lg bg-emerald-300 m-1.5 border-2 border-emerald-600"
    style={{ width }}
    data-testid="ListItem"
  />
);

export default ListItem;
