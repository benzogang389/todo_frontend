import { AnyAction } from 'redux';

import {
  TasksInitialState,
  CREATE_NEW_TASK_REQUEST,
  CREATE_NEW_TASK_SUCCESS,
  TASKS_ERROR,
} from './types';

export const initialStateTasks: TasksInitialState = {
  tasks: [],
  loading: false,
  error: '',
};

export default function reducer(state = initialStateTasks, action: AnyAction) {
  switch (action.type) {
    case CREATE_NEW_TASK_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_NEW_TASK_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case TASKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
