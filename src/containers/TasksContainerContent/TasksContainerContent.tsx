import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { FormikParamsNewCategory } from 'containers/CategoriesContainerHeader/types';

import ItemsCotent from 'components/ItemsCotent/ItemsCotent';

// import { deleteCategory, updateCategory } from 'store/categories/action';
import { changeTaskComplete, changeTaskContent, deleteTask, getAllTasks } from 'store/tasks/action';

import { RootState } from 'store/types';

const TasksContainerContent = () => {
  const dispatch = useDispatch();

  const [editTaskId, setEditTaskId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const { tasks } = useSelector((state: RootState) => state.tasks);
  const { categories } = useSelector((state: RootState) => state.categories);

  const handleSumbit = async ({ text }: FormikParamsNewCategory) => {
    await dispatch(changeTaskContent({ text, id: editTaskId, categoryId: selectedCategoryId }));
    await dispatch(getAllTasks());

    formik.resetForm();
  };

  const valSchemaCategoryHeader = yup.object({
    text: yup.string().required('Name of category is required').trim().max(1000),
    categoryId: yup.string().required('Need to choose one category'),
  });

  const formik = useFormik({
    initialValues: {
      text: '',
      categoryId: '',
    },
    validationSchema: valSchemaCategoryHeader,
    onSubmit: handleSumbit,
  });

  const editTask = (id: string, text: string, categoryId: string | undefined) => {
    setEditTaskId(id);

    formik.setValues({ text, categoryId: String(categoryId) });
    setSelectedCategoryId(String(categoryId));
  };

  const deleteCurrTask = async (id: string) => {
    await dispatch(deleteTask({ id }));
    await dispatch(getAllTasks());
  };

  const cancelEdit = () => {
    setEditTaskId('');
    formik.resetForm();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    dispatch(changeTaskComplete({ id, completed: e.target.checked }));
  };

  const selectCategory = (id: string) => {
    setSelectedCategoryId(id);
    formik.setFieldValue('categoryId', id);
  };

  return (
    <>
      <ItemsCotent
        formik={formik}
        editableItemId={editTaskId}
        editItem={editTask}
        deleteItem={deleteCurrTask}
        cancelEdit={cancelEdit}
        onChange={onChange}
        items={tasks}
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        selectCategory={selectCategory}
      />
    </>
  );
};

export default TasksContainerContent;
