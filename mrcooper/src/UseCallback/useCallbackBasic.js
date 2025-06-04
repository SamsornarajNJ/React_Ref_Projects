import React, { useCallback, useState } from 'react'

const Child = React.memo(({label, onClick}) => {
    console.log(`Child is Rendering ${label}`);
    return <button onClick={onClick} style={{border: '1px solid'}}>{label}</button>    
});

const UseCallbackBasic = () => {
    const [counts, setCounts] = useState(0);

    const handleClick1 = () => {
        console.log("Button1 Clicked"); 
    }

    const handleClick2 = useCallback(() => { // handleclick2 willnot recreated again in 2nd render 
        console.log("Button2 Clicked");
    },[]);

  return (<>
    <div>useCallbackBasic</div>
        <h1>{counts}</h1>
        <button onClick={() => setCounts((prev) => prev + 1)} style={{border: '1px solid'}}>Click me</button><br />
        <Child label="Button1 (no useCallback)" onClick={handleClick1} /><br />
        <Child label="Button2 (with useCallback)" onClick={handleClick2} />
    </>)
}

export default UseCallbackBasic;