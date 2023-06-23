import { createSlice } from '@reduxjs/toolkit';
import { AnimationName } from '~/utils/types';

type QueueState = {
  actions: string[];
  animations: Array<AnimationName | AnimationName[]>;
  currentAnimation: AnimationName | AnimationName[] | undefined;
};

const initialState: QueueState = {
  actions: [],
  animations: [],
  currentAnimation: undefined,
};

type QueueAnimationAction = {
  payload: Array<AnimationName | AnimationName[]>;
  type: string;
};

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    queueAnimation: (state, action: QueueAnimationAction) => {
      state.animations.push(...action.payload);

      if (state.animations.length > 0) {
        state.currentAnimation = action.payload[0];
      }
    },
    dequeueAnimation: (state) => {
      state.animations.shift();
      state.currentAnimation = state.animations.length > 0 ? state.animations[0] : undefined;
    },
    clearQueue: (state) => {
      state.actions = [];
      state.animations = [];
      state.currentAnimation = undefined;
    },
  },
});

export const { queueAnimation, dequeueAnimation, clearQueue } = queueSlice.actions;
export const selectQueue = ({ queue }: { queue: QueueState }) => queue;
export default queueSlice.reducer;
