import 'App.scss';
import { useRoutes } from 'routes/Routes';

const App = () => {
  const routes = useRoutes();

  return <main className="main">{routes}</main>;
};

export default App;
