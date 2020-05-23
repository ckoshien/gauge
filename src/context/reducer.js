import { useReducer } from "react";

const initialState = {
  isCharging: false,
  count:3000
};

function reducer(state, action) {
  switch (action.type) {
    case 'charging':
      return {
        ...state,
        isCharging: true
      };
    case 'discharging':
      return {
        ...state,
        isCharging: false
      };
    case 'setCount':
      return {
        ...state,
        count: action.count
      };
    default:
      return state;
  }
}

export function MyReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
      state,
      dispatch
  }
}