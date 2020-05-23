import { useReducer } from "react";

const initialState = {isCharging: false};

function reducer(state, action) {
  switch (action.type) {
    case 'charging':
      return {isCharging: true};
    case 'discharging':
      return {isCharging: false};
    default:
      return {isCharging: true};
  }
}

export function MyReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
      state,
      dispatch
  }
}