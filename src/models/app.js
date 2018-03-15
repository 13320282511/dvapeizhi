/**
 * Created by zj on 2018/3/15.
 */
export default {

  namespace: 'appIndex',

  state: {
    shen:8989
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    * ceSave({payload}, {call, put}) {
      yield  put({type: 'hdianji', payload: payload})
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    hdianji(state, {payload}) {
      return {...state, ...payload};
    }
  },

};
