import { combineReducers } from '@reduxjs/toolkit';
import movie from './slices/movie';

const rootReducer = combineReducers({ movie });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
