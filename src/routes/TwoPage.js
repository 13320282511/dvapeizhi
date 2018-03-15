import React from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import ThreeRoute from '../components/ThreeRoute';
import {Grid} from 'antd-mobile';

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

function TwoPage(props) {
  function hClick(e) {
    console.log('props', props)
    props.dispatch({type: 'two/ceSave', payload: {name: 8888, wudi: 9090}})
  }

  return (
    <div>
      TwoPage页面
      <Grid data={data}
            activeStyle={false}
            columnNum={4}
            hasLine={false}
            renderItem={(dataItem, index) => (
              <a>
                <div className="am-grid-item-contain column-num-4" style={{textAlign: 'center'}}>
                  <img style={{width: '0.9rem'}} src={dataItem.icon}/>
                  <div className="am-grid-text"
                       style={{
                         fontSize: '0.3rem',
                         marginTop: '0.1rem',
                         color: '#999',
                         fontSize: '0.1rem'
                       }}>{dataItem.text}</div>
                </div>
              </a>
            )}
            onClick={(el, index) => {
              switch (index) {
                case 2:
                  console.log('props', props)
                  props.dispatch(
                    routerRedux.push({
                      pathname: `/routerLink/${index}`,
                      query: {
                        id: index
                      }
                    })
                  )
                  break;
              }
            }
            }/>
      <h1 onClick={hClick}>点击我</h1>
      <h2>{props.name}</h2>
      <h3>{props.wudi}</h3>
      <ThreeRoute/>
    </div>
  )
    ;

}

function mapState(state) {
  console.log('state', state)
  const two = state.two;
  return {
    name: two.name,
    wudi: two.wudi
  }
}

export default connect(mapState)(TwoPage);
