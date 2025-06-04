import React from 'react'
import ToggleTheme from './ToggleTheme';

const sampleComponent = () => {

  const [theme, handleTheme] = ToggleTheme();
  
  console.log("themevalue of custom componnet", theme);

  return ( <>
    <div>sampleComponent</div>
    <button onClick={handleTheme}></button>
  </>)
}

export default sampleComponent;