import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/counter';

const Counter = () => {
  const count = useSelector((state) => state.count.countValue);
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch();

  const incrementValue = () => {
    clearTimeout(timer);
    timer = setTimeout(()=> {
        dispatch(increment());
    }, 1000)
    setTimer(timer);
  }
  const decrementValue = () => {
    if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(()=> {
        dispatch(decrement());
    }, 1000)
  }
  return (<>
    <h1>Counter</h1>
    <h2>{count}</h2>
    <button type='button' onClick={incrementValue}>Increment</button>
    <button type='button' onClick={decrementValue}>Deccrement</button>
  </>  
  )
}

export default Counter