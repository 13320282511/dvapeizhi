import React from 'react';
import {connect} from 'dva';
function RouterLink (props) {
  return (
    <div>
      <h1>路由跳转页面</h1>
      <h2>{props.name}</h2>
    </div>
  )
}
function RouterLinKState(state) {
  console.log('state',state)
  return {
    ...state.routerLink
  }
}
export default connect(RouterLinKState)(RouterLink)
