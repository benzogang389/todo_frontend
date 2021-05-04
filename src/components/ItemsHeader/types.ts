import { FormikValues } from 'formik';

import { CategoriesTypes } from 'store/categories/types';

export type ItemsHeaderProps = {
  formik: FormikValues;
  categories?: CategoriesTypes;
  selectCategory?: (id: string) => void;
  selectedCategoryId?: string;
};
