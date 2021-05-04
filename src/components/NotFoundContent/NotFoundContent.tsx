import { Link } from 'react-router-dom';

import './NotFoundContent.scss';

const NotFoundContent = () => (
  <>
    <h2 className="not-found__title">404 Error Oops!</h2>
    <p>We can&lsquo;t find that page.</p>
    <Link className="not-found__link" to="/">
      Main page
    </Link>
  </>
);

export default NotFoundContent;
