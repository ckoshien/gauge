import { useStore, storeContext } from "./context/StoreContext";
import React, { useReducer } from 'react';
import { MyReducer } from "./context/reducer";

const Button =()=>{
    //const { charging, setC } = useStore();
    const { state ,dispatch } = MyReducer();
    return (
      <button
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