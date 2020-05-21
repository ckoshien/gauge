import React, { useEffect, useState, useCallback } from 'react';

function App() {
  const [count , setCount ] = useState(3000);
  useEffect(()=>{
    setTimeout(()=>{
      if(count < 15000){
        setCount(count + 10);
      }
    },20)
  },[count]);

  const _1stColorBox = () => {
      return(
        <div
        style={{
          position:'absolute',
          top:0,
          left:0,
          background:'linear-gradient(to right top, #65eefe ,#1fa4fb)',
          height:250,
          width:360
        }}
      ></div>
      );
  }


  const _2ndColorBox = () => {
    return(
      <div
        style={{
          position:'absolute',
          top:250,
          left:0,
          background:'linear-gradient(to left top, white 20%, #65eefe)',
          height:240,
          width:360
        }}
      ></div>
    );
  }

  const shadowBox = () => {
    return(
      <div
        style={{
          position:'absolute',
          top:300,
          left:0,
          backgroundColor:'white',
          height:500,
          width:420,
          transform: `rotate(${count/100+40}deg)`,
          transformOrigin:'right 10px'
        }}
      ></div>
    );
  }
  const shadowBox2 = () => {
    return(
      <div
        style={{
          position:'absolute',
          top:300,
          left:0,
          backgroundColor:'white',
          height:500,
          width:400,
          transform: `rotate(${count/100+130}deg)`,
          transformOrigin:'right 10px'
        }}
      ></div>
    );
  }

  const _3rdColorBox=()=>{
    return(
      <div
        style={{
          position:'absolute',
          top:0,
          left:360,
          background:'linear-gradient(to right, #1fa4fb 40% , blue)',
          height:240,
          width:360
        }}
      ></div>
    );
  }

  const _4thColorBox =()=>{
    return(
      <div
        style={{
          position:'absolute',
          top:250,
          left:360,
          backgroundColor:'white',
          height:240,
          width:360
        }}
      ></div>
    );
  }

  let fontColor = useCallback(()=>{
    if(count<10000){
      return 'black';
    }else if(count > 10000 && count < 15000){
      return 'blue';
    }else{
      return 'red'
    }
  },[count])

  return (
    <div
      style={{
        position:'relative',
        filter:`grayscale(${100-(count/100)}%)`
      }}
    >
      {_1stColorBox()} 
      {_2ndColorBox()}
      
      {_3rdColorBox()}
      {_4thColorBox()}
      {shadowBox()}
      {shadowBox2()}
      
      <img
      style={{
        position:'absolute',
        top:0,
        left:0,
      }}
      src={'/images/gauge.png'} />
      <div
        style={{
          fontSize:70,
          position:'absolute',
          top:220,
          left:180
        }}
      >
        <span
          style={{
            fontSize:70,
            color:fontColor()
          }}
        >{(count/100).toString().split('.')[0]}</span>
        <span
          style={{
            fontSize:40,
            color:fontColor()
          }}
        >
          .{(count/100).toFixed(2).toString().split('.')[1]}
         </span> 
         <span
          style={{
            fontSize:40
          }}
         >
          /100
        </span>
      </div>
      <div
        style={{
          fontSize:70,
          position:'absolute',
          top:210,
          left:170,
          opacity:0.15
        }}
      >
        <span
          style={{
            fontSize:70
          }}
        >{(count/100).toString().split('.')[0]}</span>
        <span
          style={{
            fontSize:40
          }}
        >
          .{(count/100).toFixed(2).toString().split('.')[1]}/100
        </span>
      </div>
    </div>
  );
}

export default App;
