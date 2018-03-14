import React from 'react';
import {connect} from 'dva';


function TwoPage(props) {
  function hClick(e) {
    console.log('props', props)
    props.dispatch({type: 'example/ceSave', payload: {name: 8888, wudi: 9090}})
  }

  return (
    <div>
      TwoPage页面
      <h1 onClick={hClick}>点击我</h1>
      <h2>{props.name}</h2>
      <h3>{props.wudi}</h3>
    </div>
  );

}

function mapState(state) {
  console.log('state', state)
  const example = state.example;
  return {
    name: example.name,
    wudi:example.wudi
  }
}

export default connect(mapState)(TwoPage);
