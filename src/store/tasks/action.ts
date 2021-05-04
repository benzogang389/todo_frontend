import request from 'services/axios';

import { RootThunkAction } from 'store/types';

import {
  CREATE_NEW_TASK_REQUEST,
  CREATE_NEW_TASK_SUCCESS,
  TASKS_ERROR,
  CreateNewTaskProps,
} from './types';

export const createNewTask = ({ text, categoryId }: CreateNewTaskProps): RootThunkAction => async (
  dispatch
) => {
  try {
    dispatch({
      type: CREATE_NEW_TASK_REQUEST,
    });

    const body = JSON.stringify({ name: text, categoryId });
    await request('/api/task', 'POST', body);

    dispatch({
      type: CREATE_NEW_TASK_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: {
        error: error.message || 'Something went wrong',
      },
    });
  }
};
