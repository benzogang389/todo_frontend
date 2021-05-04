import { AnyAction } from 'redux';

import {
  TasksInitialState,
  TASKS_REQUEST,
  TASKS_SUCCESS,
  GET_ALL_TASKS_SUCCESS,
  CHANGE_TASKS,
  TASKS_ERROR,
} from './types';

export const initialStateTasks: TasksInitialState = {
  tasks: [],
  loading: false,
  error: '',
};

export default function reducer(state = initialStateTasks, action: AnyAction) {
  switch (action.type) {
    case TASKS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_ALL_TASKS_SUCCESS: {
      return {
        ...state,
        tasks: action.payload.tasks,
        loading: false,
      };
    }
    case CHANGE_TASKS: {
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    }
    case TASKS_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    }
    default:
      return state;
  }
}
