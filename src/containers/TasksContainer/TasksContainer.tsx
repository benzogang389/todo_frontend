import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'shared/components/Loader/Loader';
import WrongFetch from 'shared/components/WrongFetch/WrongFetch';

import TasksContainerContent from 'containers/TasksContainerContent/TasksContainerContent';
import TasksContainerHeader from 'containers/TasksContainerHeader/TasksContainerHeader';

import { getAllCategories } from 'store/categories/action';
import { getAllTasks } from 'store/tasks/action';
import { RootState } from 'store/types';

const TasksContainer = () => {
  const dispatch = useDispatch();

  const { loading: loadingTasks, error: errorTask } = useSelector(
    (state: RootState) => state.tasks
  );
  const { loading: loadingCategory, error: errorCategory } = useSelector(
    (state: RootState) => state.categories
  );

  const fetchData = useCallback(async () => {
    await dispatch(getAllCategories());
    await dispatch(getAllTasks());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loadingTasks || loadingCategory) {
    return <Loader />;
  }

  if (errorTask || errorCategory) {
    return <WrongFetch error={errorTask || errorCategory} />;
  }

  return (
    <>
      <TasksContainerHeader />
      <TasksContainerContent />
    </>
  );
};

export default TasksContainer;
