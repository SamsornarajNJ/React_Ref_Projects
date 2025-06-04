import React from 'react'
import { useState } from 'react'

const HclTech = () => {
    const [counter, setCounter] = useState(0);

  return (
    <div>
        <h1>Counter</h1>
        <div style={{display: 'flex'}}>
        <button type="button" onClick={() => setCounter((prev) => prev -1)}>Decrement</button> 
        &nbsp;<h1>{counter}</h1>
        <button type='button' onClick={() => setCounter((prev) => prev +1)}>Increment</button>
        </div>
    </div>
  )
}

export default HclTech;