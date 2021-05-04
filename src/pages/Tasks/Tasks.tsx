import MainLayout from 'layouts/MainLayout/MainLayout';

import TasksContainer from 'containers/TasksContainer/TasksContainer';

const Tasks = () => (
  <MainLayout sectionName="tasks">
    <TasksContainer />
  </MainLayout>
);

export default Tasks;
