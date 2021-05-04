import request from 'services/axios';

import { RootThunkAction, DeleteCommonProps } from 'store/types';

import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  CreateNewCategoryProps,
  UpdateCategoryProps,
} from './types';

export const createNewCategory = ({ text }: CreateNewCategoryProps): RootThunkAction => async (
  dispatch
) => {
  try {
    dispatch({
      type: CATEGORIES_REQUEST,
    });

    const body = JSON.stringify({ name: text });
    await request('/api/category', 'POST', body);

    dispatch({
      type: CATEGORIES_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: {
        error: error.message || 'Something went wrong',
      },
    });
  }
};

export const updateCategory = ({ text, id }: UpdateCategoryProps): RootThunkAction => async (
  dispatch
) => {
  try {
    dispatch({
      type: CATEGORIES_REQUEST,
    });

    const body = JSON.stringify({ name: text });
    await request(`/api/category/${id}`, 'PATCH', body);

    dispatch({
      type: CATEGORIES_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: {
        error: error.message || 'Something went wrong',
      },
    });
  }
};

export const deleteCategory = ({ id }: DeleteCommonProps): RootThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORIES_REQUEST,
    });

    await request(`/api/category/${id}`, 'DELETE', null);

    dispatch({
      type: CATEGORIES_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: {
        error: error.message || 'Something went wrong',
      },
    });
  }
};

export const getAllCategories = (): RootThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORIES_REQUEST,
    });

    const categories = await request('/api/category', 'GET', null);

    dispatch({
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: { categories },
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: {
        error: error.message || 'Something went wrong',
      },
    });
  }
};
