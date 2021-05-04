import CategoriesContainerContent from 'containers/CategoriesContainerContent/CategoriesContainerContent';
import CategoriesContainerHeader from 'containers/CategoriesContainerHeader/CategoriesContainerHeader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader';
import WrongFetch from 'shared/components/WrongFetch/WrongFetch';

import { getAllCategories } from 'store/categories/action';
import { RootState } from 'store/types';

const CategoriesContainer = () => {
  const dispatch = useDispatch();

  const { loading: loadingCategory, error: errorCategory } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  if (loadingCategory) {
    return <Loader />;
  }

  if (errorCategory) {
    return <WrongFetch error={errorCategory} />;
  }

  return (
    <>
      <CategoriesContainerHeader />
      <CategoriesContainerContent />
    </>
  );
};

export default CategoriesContainer;
