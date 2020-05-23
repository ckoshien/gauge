import React, { useEffect, useState, useCallback, useContext } from 'react';
import Status from './Status';
import Charge from './Charge';
import { storeContext, useStore } from './context/StoreContext';
import Button from './Button';
import { MyReducer } from './context/reducer';

function UnderApp() {
  const [ r, setR ] = useState(0.5);
  const [ l, setL ] = useState(0.5);
  const [ filter, setFilter ] = useState('');
  //const {charging, setCharging} = useStore();
  //const {state, dispatch} = MyReducer();
  const {state , dispatch} = useContext(storeContext);
  //console.log(state,dispatch)
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
    if(state.isCharging){
      setFilter('');
    }else{
      setFilter(`
      invert(15%)
      sepia(95%)
      saturate(800%)
      hue-rotate(300deg)
      brightness(95%)
      `)
    }
  },[state]);

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
    <div className={state.isCharging? 'status2':'disCharge'}>
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
          width:200,
          top:-100-300*l,
          left:400
        }}
      ></div>
      <img
        src={process.env.PUBLIC_URL + '/images/status_gauge.png'} 
        style={{
          position:'absolute'
        }}  
      />
     <span
      style={{
        position:'absolute',
        top:150,
        left:200
      }}
     >
       {(r*100).toFixed(0)}%
      </span>
     <span
      style={{
        position:'absolute',
        top:150,
        left:640
      }}
     >
       {(l*100).toFixed(0)}%
     </span>
     <span
      style={{
        position:'absolute',
        fontSize:18,
        fontWeight:'bold',
        top:465,
        left:210
      }}
     >
       00-RAISER SYSTEM
     </span>
     <div
      style={{
        transform:'scale(0.45)',
        position:'absolute',
        top:12,
        left:8

      }}
     >
      <Status/>      
     </div>
     <img 
     style={{
       position:'absolute',
       top:-40,
       left:195,
       width:240,
       filter: filter
     }}
     src={process.env.PUBLIC_URL+'/images/00.png'}/>
     {
       (r === 1 && l === 1)
       ?
       <div
        style={{
          position:'absolute',
          background: 
          state.isCharging 
          ? 'linear-gradient(to top, blue, #3efefc)'
          : 'linear-gradient(to top, #e90d02, #e90d02)', 
          height:80,
          width:600,
          top: 230,
          left:10,
          opacity:0.8,
          color:'white',
          fontSize:18,
          textAlign:'center'
        }}
      >
        {state.isCharging ? 'O-RAISER' :'00-RAISER'}
        <br/>
        <span
          style={{
            fontSize:36
          }}
        >{state.isCharging ? 'RAISER SYS':'TRANS-AM BURST'}</span>
      </div>
      :''
     }
     <div
      style={{
        transform:'scale(0.5)',
        position:'absolute',
        top:350,
        left:320
      }}
     >
      <Charge/>
     </div>
     <div
      style={{
        position:'absolute',
        top:400,
        left:600
      }}
     >
     <Button/>
     </div>
    </div>
  );
}

export default UnderApp;
