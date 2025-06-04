import React, { useState } from 'react'
import DataChildToParent_Child from './DataChildToParent_Child';

const DataChildToParent_Parent = () => {
  const [parentData, setParentData] = useState("");
  const handleClick = (data) => {
    setParentData(data);
  }
  return (<>
     <p>{parentData}</p>
     <DataChildToParent_Child sentToParent={handleClick}/>
  </>)
}

export default DataChildToParent_Parent;