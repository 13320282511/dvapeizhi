import PathToRegexp  from 'path-to-regexp';
import _ from 'lodash';
import { routerRedux } from 'dva/router';

// import OrgLayout from '../../models/szjg/layoutOrg';
// import PersonLayout from '../../models/szjg/layoutPerson';
// import Login from '../../models/szjg/login';

const routes = [
  {
    path: '/',
    // redirect: '/',
    component: () => import('../routes/IndexPage')
  },
  {
    path: '/two',
    component: () => import('../routes/TwoPage'),
    models: () => [
      import('../models/two'),
    ],
  },
  {
    path: '/routerLink/:id',
    component: () => import('../routes/RouterLink'),
    models: () => [
      import('../models/routerLink'),
    ],
  },
];

const verifyLoginToken = ({ app, history }) => {
  history.listen((location) => {
    const { pathname } = location;
    const loginRoutes = [ '/login*', '/org/:code?', '/person/:code?'];
    const loginPage = _.some(loginRoutes, route => PathToRegexp(route).exec(pathname));
    if (!loginPage) {
      const store = app._store;
      const state = store.getState();
      const dispatch = store.dispatch;
      const loggedIn = _.get(state, 'login.loggedIn', false);
      if (!loggedIn) {
        console.warn('当前为未登录状态！');
        dispatch(routerRedux.replace('/login'));
      }
    }
  });
};

const hooks = async ({ app, history }) => {
  // await verifyLoginToken({ app, history });
};
//
// //  公共 models 设置
// const commonModels = () => [
//   import('../../models/szjg/login'),
//   import('../../models/szjg/layoutOrg'),
//   import('../../models/szjg/layoutPerson'),
// ];

export default routes;

export {
  hooks,
  // commonModels,
}
