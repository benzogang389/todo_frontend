import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { FormikParamsNewCategory } from 'containers/CategoriesContainerHeader/types';

import ItemsCotent from 'components/ItemsCotent/ItemsCotent';

import { deleteCategory, updateCategory, getAllCategories } from 'store/categories/action';

import { RootState } from 'store/types';

const CategoriesContainerContent = () => {
  const dispatch = useDispatch();

  const [editableCategoryId, setEditableCategoryId] = useState('');

  const { categories } = useSelector((state: RootState) => state.categories);

  const handleSumbit = async ({ text }: FormikParamsNewCategory) => {
    await dispatch(updateCategory({ text, id: editableCategoryId }));
    await dispatch(getAllCategories());

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
    setEditableCategoryId(id);
    formik.setValues({ text });
  };

  const deleteCurrCategory = async (id: string) => {
    await dispatch(deleteCategory({ id }));
    await dispatch(getAllCategories());
  };

  const cancelEdit = () => {
    setEditableCategoryId('');
    formik.resetForm();
  };

  return (
    <>
      <ItemsCotent
        formik={formik}
        editableItemId={editableCategoryId}
        editItem={editCategory}
        deleteItem={deleteCurrCategory}
        cancelEdit={cancelEdit}
        items={categories}
      />
    </>
  );
};

export default CategoriesContainerContent;
