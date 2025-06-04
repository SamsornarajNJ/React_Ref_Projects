import React, { useReducer, useState } from 'react'
const initialValue = {count : 0};

function reducer(state, action){
   switch(state.type) {
    case "increment" : 
    return {count : state.count +1};
    case "decrement" :
    return {count: state.count - 1 }
    default: return state; 
}
}
const initial = {
  counter: 0,
  loading: false,
  error : null
}

function counter(Counterstate, action) {
  switch(action.type) {
    case "Increment" :
    return { ...Counterstate, counter: Counterstate.counter + 1, loading: Counterstate.loading = true};
    case  "Decrement" :
      if(Counterstate.counter === 0) {
        return {...Counterstate, counter: 0}
      }
    return { ...Counterstate, counter: Counterstate.counter - 1};
    default : return Counterstate;
  }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialValue);
    const [Counterstate, Counterdispatch] = useReducer(counter, initial);
  return (
    <><p>{state.count}</p>
    <button onClick={() =>dispatch({type: "increment"})}>+</button><br />
    <p>Counterdispatch</p>
    <button onClick={() =>Counterdispatch({type: "Increment"})}>+</button><br />
    <p>{Counterstate.counter}</p>
    <button onClick={() =>Counterdispatch({type: "Decrement"})}>-</button>
    </>
  )
}

export default UseReducer


function switchfunction(state, action) {
  switch(action.type) {
    case "incre" : 
    return { count: state.count + 1  }
    case "decre" : 
  }
}

