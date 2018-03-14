import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import TwoPage from './routes/TwoPage';
// import CheckAuth from './routes/jiaoyan';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path='/two' exact component={TwoPage}>

        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
