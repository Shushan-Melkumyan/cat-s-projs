import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data/data';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
