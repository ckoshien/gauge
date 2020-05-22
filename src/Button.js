import { useStore } from "./context/StoreContext";
import React from 'react';

const Button =()=>{
    const { charging, setCharging } = useStore();
    return (
    <button
      onClick={()=>{
        setCharging(false);
        //console.log(charging);
      }}
     >DISCHARGE</button>
    );

}

export default Button