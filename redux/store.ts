import { configureStore } from '@reduxjs/toolkit';
import queueReducer from './queueSlice';

const store = configureStore({
  reducer: {
    queue: queueReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
