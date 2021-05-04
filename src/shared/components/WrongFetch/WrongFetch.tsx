import { useHistory } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout/MainLayout';

import { WrongFetchProps } from './types';

import './WrongFetch.scss';

const WrongFetch: React.FC<WrongFetchProps> = ({ error }) => {
  const history = useHistory();

  const handleReturnHome = () => {
    history.push('/');
    window.location.reload();
  };

  return (
    <MainLayout sectionName="wrong-fetch">
      <div className="wrong-fetch__content">
        <p className="wrong-fetch__title">{`Opps, ${error}`}</p>

        <button className="wrong-fetch__btn" type="button" onClick={handleReturnHome}>
          Return to home page
        </button>
      </div>
    </MainLayout>
  );
};

export default WrongFetch;
