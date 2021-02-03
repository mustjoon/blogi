import { combineReducers } from '@reduxjs/toolkit';
import blog from './slices/blog';
import nmap from './slices/nmap';

const rootReducer = combineReducers({ blog, nmap });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
