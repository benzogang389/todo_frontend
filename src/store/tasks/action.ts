import request from 'services/axios';

import { RootThunkAction, DeleteCommonProps } from 'store/types';

import {
  TASKS_REQUEST,
  TASKS_SUCCESS,
  TASKS_ERROR,
  GET_ALL_TASKS_SUCCESS,
  CHANGE_TASKS,
  CreateNewTaskProps,
  ChangeTaskCompleteProps,
  ChangeTaskContentProps,
} from './types';

export const createNewTask = ({ text, categoryId }: CreateNewTaskProps): RootThunkAction => async (
  dispatch
) => {
  try {
    dispatch({
      type: TASKS_REQUEST,
    });

    const body = JSON.stringify({ name: text, categoryId });
    await request('/api/task', 'POST', body);

    dispatch({
      type: TASKS_SUCCESS,
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

export const getAllTasks = (): RootThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: TASKS_REQUEST,
    });

    const tasks = await request('/api/task', 'GET', null);

    dispatch({
      type: GET_ALL_TASKS_SUCCESS,
      payload: {
        tasks,
      },
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

export const changeTaskComplete = ({
  id,
  completed,
}: ChangeTaskCompleteProps): RootThunkAction => async (dispatch, getState) => {
  try {
    const { tasks } = getState().tasks;

    const updatedTasks = tasks.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          completed,
        };
      }

      return item;
    });

    dispatch({
      type: CHANGE_TASKS,
      payload: {
        tasks: updatedTasks,
      },
    });

    const body = JSON.stringify({ completed });
    await request(`/api/task/updateComplete/${id}`, 'PATCH', body);
  } catch (error) {
    dispatch({
      type: TASKS_ERROR,
      payload: {
        error: error.message || 'Something went wrong',
      },
    });
  }
};

export const changeTaskContent = ({
  id,
  text,
  categoryId,
}: ChangeTaskContentProps): RootThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: TASKS_REQUEST,
    });

    const body = JSON.stringify({ name: text, categoryId });
    await request(`/api/task/updateContent/${id}`, 'PATCH', body);

    dispatch({
      type: TASKS_SUCCESS,
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

export const deleteTask = ({ id }: DeleteCommonProps): RootThunkAction => async (dispatch) => {
  try {
    dispatch({
      type: TASKS_REQUEST,
    });

    await request(`/api/task/${id}`, 'DELETE', null);

    dispatch({
      type: TASKS_SUCCESS,
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
