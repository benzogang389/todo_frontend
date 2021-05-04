import { FormikValues } from 'formik';

import { CategoriesTypes } from 'store/categories/types';
import { TasksTypes } from 'store/tasks/types';

export type ItemsCotentProps = {
  items: TasksTypes | CategoriesTypes;
  editItem: (id: string, text: string, categoryId?: string) => void;
  deleteItem: (id: string) => void;
  cancelEdit: () => void;
  editableItemId: string;
  formik: FormikValues;
  categories?: CategoriesTypes;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  selectCategory?: (id: string) => void;
  selectedCategoryId?: string;
};

export type ItemType = Record<string, string | boolean>;
