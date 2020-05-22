import { useReducer } from "react";

const initialState = {isCharging: true};

function reducer(state, action) {
  switch (action.type) {
    case 'charging':
      return {isCharging: true};
    case 'discharging':
      return {isCharging: false};
    default:
      break;
  }
}

export function MyReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
      state,
      dispatch
  }
}