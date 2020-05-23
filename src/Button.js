import { useStore, storeContext } from "./context/StoreContext";
import React, { useReducer, useContext } from 'react';
import { MyReducer } from "./context/reducer";

const Button =()=>{
    const { state, dispatch } = useContext(storeContext);
    return (
      <button
      //disabled={}
      onClick={()=>{
        dispatch(
          {
            type:'discharging'
          }
        );
        console.log(state);
      }}
     >DISCHARGE</button>
    );

}

export default Button