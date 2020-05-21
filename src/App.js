import React, { useEffect, useState, useCallback } from 'react';

function App() {
  const [ r, setR ] = useState(0.5);
  const [ l, setL ] = useState(0.5);
  useEffect(()=>{
    setTimeout(()=>{
      //setY(0.5)
      if(r < 0.8){
        setR(r + 0.01);
      }else if(Math.floor((l*100).toFixed(0))/100 < 1.0){
        setR(0.8 + 0.2*Math.random());
      }else{
        setR(1);
      }
      if(l<0.8){
        setL(r + 0.01);
      }else if(Math.floor((l*100).toFixed(0))/100 < 1.0){
        setL(0.8 + 0.2*Math.random());
      }else{
        setL(1);
        //console.log(l);
      }
    },250)
  },[r])
  
  return(
    <div className="status">
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
     {
       (r === 1 && l === 1)
       ?
       <div
        style={{
          position:'absolute',
          background:'linear-gradient(to top, blue, #3efefc)',
          height:80,
          width:400,
          top: 230,
          left:250,
          opacity:0.7,
          color:'white',
          fontSize:18,
          textAlign:'center'
        }}
      >
        O-RAISER
        <br/>
        <span
          style={{
            fontSize:36
          }}
        >RAISER SYS</span>
      </div>
      :''
     }
     
    </div>
  );
}

export default App;
