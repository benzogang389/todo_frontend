import { AnyAction } from 'redux';

import { CategoriesInitialState } from './types';

export const initialStateCategories: CategoriesInitialState = {
  categories: [],
};

export default function reducer(state = initialStateCategories, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}
