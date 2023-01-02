import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import roomSlice from '../store/roomSlice';

export const store = configureStore({
  reducer: {
   rooms: roomSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
