import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Loader from 'shared/components/Loader/Loader';
import WrongFetch from 'shared/components/WrongFetch/WrongFetch';

import ItemsHeader from 'components/ItemsHeader/ItemsHeader';
// import ItemsCotent from 'components/ItemsCotent/ItemsCotent';

import { createNewTask } from 'store/tasks/action';
import { getAllCategories } from 'store/categories/action';
import { RootState } from 'store/types';

import { FormikParamsNewTask } from './types';

const TasksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const { loading: loadingTasks, error: errorTask } = useSelector(
    (state: RootState) => state.tasks
  );
  const { loading: loadingCategory, error: errorCategory, categories } = useSelector(
    (state: RootState) => state.categories
  );

  const handleSumbit = async ({ text, categoryId }: FormikParamsNewTask) => {
    dispatch(createNewTask({ text, categoryId }));
    formik.resetForm();
  };

  const valSchemaTasksHeader = yup.object({
    text: yup.string().required('Task text is required').trim().max(100),
    categoryId: yup.string().required('Need to choose one category'),
  });

  const formik = useFormik({
    initialValues: {
      text: '',
      categoryId: '',
    },
    validationSchema: valSchemaTasksHeader,
    onSubmit: handleSumbit,
  });

  if (loadingTasks || loadingCategory) {
    return <Loader />;
  }

  if (errorTask || errorCategory) {
    return <WrongFetch error={errorTask || errorCategory} />;
  }

  return (
    <>
      <ItemsHeader formik={formik} categories={categories} />

      {/* <ItemsCotent items={tasks} /> */}
    </>
  );
};

export default TasksContainer;
