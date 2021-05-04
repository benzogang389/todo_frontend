import { Switch, Route } from 'react-router-dom';

import Tickets from 'pages/Tickets/Tickets';
import NotFound from 'pages/NotFound/NotFound';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Tickets} />

      <Route component={NotFound} />
    </Switch>
  );
};
