import { useStore, storeContext } from "./context/StoreContext";
import React, { useReducer, useContext } from 'react';
import { MyReducer } from "./context/reducer";

const Button =()=>{
    const { state, dispatch } = useContext(storeContext);
    return (
      <button
        style={{
          width:60,
          height:60,
          backgroundColor:'gray',
          cursor:'pointer',
          boxShadow: '0 3px 0 0'
        }}
        className={
          state.count > 10000 && state.isCharging ? 'readyTransAm':''}
      disabled={state.count < 10000}
      onClick={()=>{
        dispatch(
          {
            type:'discharging'
          }
        );
        console.log(state);
      }}
     ></button>
    );

}

export default Button