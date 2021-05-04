import { FormikValues } from 'formik';

import { CategoriesTypes } from 'store/categories/types';

export type ItemsHeaderProps = {
  formik: FormikValues;
  categories?: CategoriesTypes;
};
