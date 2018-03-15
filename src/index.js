import dva from 'dva';
import createHashHistory from 'history/createHashHistory';
import _isEmpty from 'lodash/isEmpty';
import './utils/flexible';
import './index.css';

// 1. Initialize
// const app = dva();

global._isEmpty = _isEmpty;

window.CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
  <svg
    className={`am-icon am-icon-${type.default.id} am-icon-${size} ${className}`}
    {...restProps}
  >
    <use xlinkHref={`#${type.default.id}`} /> {/* svg-sprite-loader@0.3.x */}
    {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}
  </svg>
);
// 1. Initialize
const app = dva({
  history: createHashHistory(),

  onError(e) {
    console.log(`%c ↓↓↓↓↓↓↓↓↓↓↓↓↓请查看错误信息↓↓↓↓↓↓↓↓↓↓↓↓↓`,'color:red');
    console.log(e);
    console.log(`%c ↑↑↑↑↑↑↑↑↑↑↑↑↑请查看错误信息↑↑↑↑↑↑↑↑↑↑↑↑↑`,'color:red');
  },
});
// 2. Plugins
// app.use({});

// 3. Model
//按照目前的配置，所有后面的default都要去掉，不然报错,写的注释掉的居然也会被运行检测到，郁闷
//这里可以给全局绑定一个属性，最开始就有此属性，可以用来判断用户是否登录之类的
app.model(require('./models/app'))

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
window.app = app;
