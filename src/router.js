// import React from 'react';
// import {Router, Route, Switch} from 'dva/router';
// import IndexPage from './routes/IndexPage';
// import TwoPage from './routes/TwoPage';
// // import CheckAuth from './routes/jiaoyan';
//
// function RouterConfig({history}) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage}/>
//         <Route path='/two' exact component={TwoPage} />
//       </Switch>
//     </Router>
//   );
// }
//
// export default RouterConfig;

import React from 'react';
import { Switch, Router, Route, Redirect } from 'dva/router';
// import dynamic from 'dva/dynamic';
import dynamic from './utils/dynamic';
import _ from 'lodash';
import routes,{hooks} from './routes/routes';


const RouterConfig = ({ app, history }) => {

  if (_.isFunction(hooks)) hooks({ app, history });

  return (
    <Router history={history}>
      <Switch>
        {routes.map((props, key) => {
          const { component = null, models = null, exact = true, redirect = null, path = '' } = props;
          if (!_.isEmpty(redirect)) {
            <Route key={key} exact={exact} path={path} render={() => (<Redirect to={redirect} />)}/>
          } else {
            const params = { app };
            // _.isFunction(commonModels) && _.set(params, 'commonModels', commonModels);
            component && _.set(params, 'component', component);
            models && _.set(params, 'models', models);
            const routerComponent = dynamic(params);
            return (<Route key={key} exact={exact} path={path} component={routerComponent} />);
          }
        })}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
