import { combineReducers, AnyAction } from 'redux';

import { CLEAR_ALL_REDUCERS_DATA, RootState } from 'store/types';

import tasks from './tasks';
import categories from './categories';

import { initialStateTasks } from './tasks/reducer';
import { initialStateCategories } from './categories/reducer';

export const RootInitialState = {
  tasks: initialStateTasks,
  categories: initialStateCategories,
};

const allReducers = combineReducers({
  tasks: tasks.reducer,
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
