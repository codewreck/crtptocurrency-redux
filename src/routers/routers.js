import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import App from '../components/App';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
