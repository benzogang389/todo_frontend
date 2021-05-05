import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import ItemsHeader from 'components/ItemsHeader/ItemsHeader';

import { createNewCategory, getAllCategories } from 'store/categories/action';

import { FormikParamsNewCategory } from './types';

const CategoriesContainerHeader = () => {
  const dispatch = useDispatch();

  const handleSumbit = async ({ text }: FormikParamsNewCategory) => {
    formik.resetForm();

    await dispatch(createNewCategory({ text }));
    await dispatch(getAllCategories());
  };

  const validationSchema = yup.object({
    text: yup.string().required('Name of category is required').trim().max(100),
  });

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema,
    onSubmit: handleSumbit,
  });

  return (
    <>
      <ItemsHeader formik={formik} />
    </>
  );
};

export default CategoriesContainerHeader;
