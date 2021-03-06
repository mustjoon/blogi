import { combineReducers } from '@reduxjs/toolkit';
import blog from './slices/blog';
import cheatsheet from './slices/cheatSheet';

const rootReducer = combineReducers({ blog, cheatsheet });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
