import { combineReducers } from '@reduxjs/toolkit';
import movie from './slices/movie';
import nmap from './slices/nmap';

const rootReducer = combineReducers({ movie, nmap });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
