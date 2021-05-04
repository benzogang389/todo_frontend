import MainLayout from 'layouts/MainLayout/MainLayout';

import './Loader.scss';

const Loader = () => (
  <MainLayout sectionName="loader">
    <div className="loader__content">
      <p className="loader__content-title">Loading...</p>
    </div>
  </MainLayout>
);

export default Loader;
