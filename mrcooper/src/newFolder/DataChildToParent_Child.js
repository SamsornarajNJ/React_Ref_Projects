import React, { useState } from 'react'

const DataChildToParent_Child = ({sentToParent}) => {
    const [childData, setChildData] = useState("ChildData");
    const handleClick = () => {
        sentToParent(childData);
    }

  return (<>
    <div>DataChildToParent_Child</div>
    <button onClick={handleClick} > Click me</button>
    </>
  )
}

export default DataChildToParent_Child