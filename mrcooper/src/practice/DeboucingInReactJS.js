import React, { useEffect, useState } from 'react'

const DeboucingInReactJS = () => {
    //set input field 
    //save them on inputvalue state
    //it inputvalue state changed trigger the setTimeout fun with 1000 delay 

    const [inputValue, setInputValue] = useState();
    const [debouncing, setDebouncing] = useState();
    useEffect(() => {
        let timer;
     timer = setTimeout(() => {
        setDebouncing(inputValue);
     }, 1000);     
     return () => clearTimeout(timer); 
    }, [inputValue])
    
  return (
    <div>
        <input type='search' placeholder='search here ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
       <p>{debouncing}</p>
    </div>
  )
}

export default DeboucingInReactJS