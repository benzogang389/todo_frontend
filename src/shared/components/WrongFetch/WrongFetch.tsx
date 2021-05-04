import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout/MainLayout';

import { clearAllStoreData } from 'store/rootAction';

import { WrongFetchProps } from './types';

import './WrongFetch.scss';

const WrongFetch: React.FC<WrongFetchProps> = ({ error }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleReturnHome = () => {
    dispatch(clearAllStoreData());
    history.push('/');
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
