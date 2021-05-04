import { combineReducers, AnyAction } from 'redux';

import { CLEAR_ALL_REDUCERS_DATA, RootState } from 'store/types';

import tickets from './tickets';
import categories from './categories';

import { initialStateTickets } from './tickets/reducer';
import { initialStateCategories } from './categories/reducer';

export const RootInitialState = {
  tickets: initialStateTickets,
  categories: initialStateCategories,
};

const allReducers = combineReducers({
  tickets: tickets.reducer,
  categories: categories.reducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case CLEAR_ALL_REDUCERS_DATA:
      return {
        ...RootInitialState,
      };

    default:
      return allReducers(state, action);
  }
};

export default rootReducer;
