export const CREATE_NEW_TASK_REQUEST = 'CREATE_NEW_TASK_REQUEST';
export const CREATE_NEW_TASK_SUCCESS = 'CREATE_NEW_TASK_SUCCESS';
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
