import { Switch, Route } from 'react-router-dom';

import Tasks from 'pages/Tasks/Tasks';
import NotFound from 'pages/NotFound/NotFound';
import Categories from 'pages/Categories/Categories';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Tasks} />
      <Route exact path="/categories" component={Categories} />

      <Route component={NotFound} />
    </Switch>
  );
};
