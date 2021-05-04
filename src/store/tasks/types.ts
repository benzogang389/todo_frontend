export const TASKS_REQUEST = 'TASKS_REQUEST';
export const TASKS_SUCCESS = 'TASKS_SUCCESS';
export const GET_ALL_TASKS_SUCCESS = 'GET_ALL_TASKS_SUCCESS';
export const CHANGE_TASKS = 'CHANGE_TASKS';
export const TASKS_ERROR = 'TASKS_ERROR';

export type TaskType = {
  _id: string;
  name: string;
  categoryId: string;
  completed: boolean;
};

export type TasksTypes = Array<TaskType>;

export interface TasksInitialState {
  tasks: TasksTypes;
  loading: boolean;
  error: string;
}

export interface CreateNewTaskProps {
  text: string;
  categoryId: string;
}

export interface ChangeTaskCompleteProps {
  id: string;
  completed: boolean;
}

export interface ChangeTaskContentProps extends CreateNewTaskProps {
  id: string;
}
