import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import slideShowReducer from 'features/slideShowSlice';

export const store = configureStore({
  reducer: {
    slideShow: slideShowReducer
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
