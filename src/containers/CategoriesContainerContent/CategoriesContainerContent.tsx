import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { FormikParamsNewCategory } from 'containers/CategoriesContainerHeader/types';

import ItemsCotent from 'components/ItemsCotent/ItemsCotent';

import { deleteCategory, updateCategory } from 'store/categories/action';

import { RootState } from 'store/types';

const CategoriesContainerContent = () => {
  const dispatch = useDispatch();

  const [editTaskId, setEditTaskId] = useState('');

  const { categories } = useSelector((state: RootState) => state.categories);

  const handleSumbit = ({ text }: FormikParamsNewCategory) => {
    dispatch(updateCategory({ text, id: editTaskId }));
    formik.resetForm();
  };

  const valSchemaCategoryHeader = yup.object({
    text: yup.string().required('Name of category is required').trim().max(30),
  });

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: valSchemaCategoryHeader,
    onSubmit: handleSumbit,
  });

  const editCategory = (id: string, text: string) => {
    setEditTaskId(id);
    formik.setValues({ text });
  };

  const deleteCurrCategory = (id: string) => {
    dispatch(deleteCategory({ id }));
  };

  const cancelEdit = () => {
    setEditTaskId('');
    formik.resetForm();
  };

  return (
    <>
      <ItemsCotent
        formik={formik}
        editableTaskId={editTaskId}
        editItem={editCategory}
        deleteItem={deleteCurrCategory}
        cancelEdit={cancelEdit}
        items={categories}
      />
    </>
  );
};

export default CategoriesContainerContent;
