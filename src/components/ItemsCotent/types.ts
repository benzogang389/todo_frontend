import { FormikValues } from 'formik';

import { CategoriesTypes } from 'store/categories/types';
import { TasksTypes } from 'store/tasks/types';

export type ItemsCotentProps = {
  items: TasksTypes | CategoriesTypes;
  editItem: (id: string, text: string) => void;
  deleteItem: (id: string) => void;
  cancelEdit: () => void;
  editableTaskId: string;
  formik: FormikValues;
};

export type ItemType = Record<string, string | boolean>;
