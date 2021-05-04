import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { TicketsInitialState } from './tickets/types';
import { CategoriesInitialState } from './categories/types';

export interface RootState {
  tickets: TicketsInitialState;
  categories: CategoriesInitialState;
}

export type RootThunkDispatch = ThunkDispatch<RootState, null, AnyAction>;

export type RootThunkAction = ThunkAction<void, RootState, null, AnyAction>;

export const CLEAR_ALL_REDUCERS_DATA = 'CLEAR_ALL_REDUCERS_DATA';
