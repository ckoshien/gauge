import React, { useEffect, useState, useCallback, useContext } from 'react';
import {storeContext} from './context/StoreContext';


function Status() {
  const {state, dispatch} = useContext(storeContext);
  const [ r, setR ] = useState(0.5);
  const [ l, setL ] = useState(0.5);
  const calc = useCallback((v,func)=>{
    if(v < 0.8){
      func(v + 0.01);
    }else if(Math.floor((v*100).toFixed(0))/100 < 1.0){
      func(0.8 + 0.2*Math.random());
    }else{
      func(1);
    }
  },[]);

  useEffect(()=>{
    setTimeout(()=>{
      calc(r,setR);
    },250)
  },[r]);
  useEffect(()=>{
    setTimeout(()=>{
      calc(l,setL);
    },250)
  },[l])
  
  return(
    <div className={state.isCharging ? 'status':'disCharge _1'}>
      <div
        style={{
          position:'absolute',
          backgroundColor:'white',
          height:500,
          width:400,
          top:-100-300*r,
          left:0
        }}
      ></div>
      <div
        style={{
          position:'absolute',
          backgroundColor:'white',
          height:500,
          width:400,
          top:-100-300*l,
          left:400
        }}
      ></div>
      <img
        src={process.env.PUBLIC_URL + '/images/status_gauge.png'} 
        style={{
          height:500,
          position:'absolute'
        }}  
      />
     <span
      style={{
        position:'absolute',
        top:150,
        left:200,
        fontSize:20
      }}
     >
       {(r*100).toFixed(0)}%
      </span>
     <span
      style={{
        position:'absolute',
        top:150,
        left:640,
        fontSize:20
      }}
     >
       {(l*100).toFixed(0)}%
     </span>
     <span
      style={{
        position:'absolute',
        fontSize:32,
        fontWeight:'bold',
        bottom:10,
        left:215
      }}
     >
       TWINDRIVE
     </span>
    </div>
  );
}

export default Status;
