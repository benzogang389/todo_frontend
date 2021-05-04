import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { TasksInitialState } from './tasks/types';
import { CategoriesInitialState } from './categories/types';

export interface RootState {
  tasks: TasksInitialState;
  categories: CategoriesInitialState;
}

export type RootThunkDispatch = ThunkDispatch<RootState, null, AnyAction>;

export type RootThunkAction = ThunkAction<void, RootState, null, AnyAction>;

export const CLEAR_ALL_REDUCERS_DATA = 'CLEAR_ALL_REDUCERS_DATA';
