import _ from 'lodash';

let defaultState = {
  data: [
    {
      id: 'bitcoin',
      price_usd: '0'
    },
    {
      id: 'ethereum',
      price_usd: '1'
    }
  ],
  history: []
}

const mainReducer = (state = defaultState, action) => {
  if(action.type === 'FETCH_DATA'){
    return {
      ...state,
      data: action.data,
      // history: ([...state.history, ...action.data])
      // history: [...action.data, ...state.history]
      history: [...state.history, ...state.data]
    }
  } else {
    return state;
  }
}

export default mainReducer;
