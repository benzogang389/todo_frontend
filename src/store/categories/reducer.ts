import { AnyAction } from 'redux';

import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_WITH_RELOAD_SUCCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  CategoriesInitialState,
} from './types';

export const initialStateCategories: CategoriesInitialState = {
  categories: [],
  loading: true,
  reload: true,
  error: '',
};

export default function reducer(state = initialStateCategories, action: AnyAction) {
  switch (action.type) {
    case CATEGORIES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CATEGORIES_WITH_RELOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        reload: true,
      };
    }
    case GET_ALL_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        reload: false,
        categories: action.payload.categories,
      };
    }
    case CATEGORIES_ERROR: {
      return {
        ...state,
        loading: false,
        reload: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
