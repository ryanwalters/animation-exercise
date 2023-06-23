import type { Variant } from 'framer-motion';

export enum Animation {
  default = 'default',
  lineAcross = 'lineAcross',
  lineFadeOut = 'lineFadeOut',
  tilesIn = 'tilesIn',
  tilesCombine = 'tilesCombine',
}

export type AnimationName = keyof typeof Animation;

export type AnimationVariants = {
  [key in Animation]?: Variant;
};
