import React, { useEffect, useRef, useState } from "react";

const UseRef= () => {
  //Syntax of useRef//
  //const myref = useRef(initialValue);
  //Acccess the DOM using useRef
  //const inputRef = useRef(null); //Step:1 Create the ref

  //const focusInput = () => {
  //  inputRef.current.focus(); //Step:3 Access the DOM Element
  //}

  // const [seconds, setSeconds] = useState(0);
  //Persisting Value Across Renders//
  // const interValRef = useRef(null);
  //const startTimer = () => {
  //  interValRef.current = setInterval(() => { // interValRef.current is ID here.. In React, Whenever we use Timer fucntions we need ID
  //         setSeconds(prev => prev +1);
  //     },1000)
  //   };
  //   const stopTimer = () => {
  //     clearInterval(interValRef.current);
  //   }

  // Store the Previous value//
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  });
  return (
    <>
      <div>UseHook</div>
      {/*Access the DOM Element using Ref 
    <input ref={inputRef} type='text'/> {/*Step2:  Attach the ref
    <button onClick={focusInput} >Click me</button> */}

      {/* Persisting Value Across Renders */}
      {/* <p>{seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button> */}

      {/* Store the prevoius value using useRef */}
      <p>{count}</p>
      <p>Before: {prevCount.current}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      {/* 💡 Why it's called prevCount?
Because it holds the count from the last render, not the current one. */}
    </>
  );
};

export default UseRef;
