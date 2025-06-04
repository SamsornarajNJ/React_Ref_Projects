import React, { createContext, useContext, useState } from 'react'

export const UseContext = ({children}) => {
    const myContex = createContext();
    const [message, setMessage] = useState("Hello world");
  return (<>
   <myContex.Provider value={message}>
    {children}
   </myContex.Provider>
    </>)
}
//use them in our componet with const {messgae} = useContext(myContext);

export default UseContext;

