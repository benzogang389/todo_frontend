import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import ItemsHeader from 'components/ItemsHeader/ItemsHeader';

import { createNewTask, getAllTasks } from 'store/tasks/action';
import { RootState } from 'store/types';

import { FormikParamsNewTask } from './types';

const TasksContainerHeader = () => {
  const dispatch = useDispatch();

  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const { categories } = useSelector((state: RootState) => state.categories);

  const handleSumbit = async ({ text, categoryId }: FormikParamsNewTask) => {
    await dispatch(createNewTask({ text, categoryId }));
    await dispatch(getAllTasks());
    formik.resetForm();
  };

  const validationSchema = yup.object({
    text: yup.string().required('Task text is required').trim().max(1000),
    categoryId: yup.string().required('Need to choose one category'),
  });

  const formik = useFormik({
    initialValues: {
      text: '',
      categoryId: '',
    },
    validationSchema,
    onSubmit: handleSumbit,
  });

  const selectCategory = (id: string) => {
    setSelectedCategoryId(id);
    formik.setFieldValue('categoryId', id);
  };

  return (
    <>
      <ItemsHeader
        formik={formik}
        categories={categories}
        selectCategory={selectCategory}
        selectedCategoryId={selectedCategoryId}
      />
    </>
  );
};

export default TasksContainerHeader;
