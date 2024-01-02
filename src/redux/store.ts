import { configureStore } from '@reduxjs/toolkit';
import blockModalSlice from './slices/blockmodal';

export const store = configureStore({
  reducer: {
    blockModal: blockModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
