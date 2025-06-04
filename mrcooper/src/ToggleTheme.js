import React, { useEffect, useState } from "react";

const ToggleTheme = () => {
    const [theme, setTheme] = useState();

    const handleTheme = () => {
        // console.log("working")
       if(theme === "dark") {
        alert('yes theme is dasrk')
           setTheme(localStorage.setItem('currenttheme', "light"));
       } else {
        setTheme(localStorage.setItem('currenttheme', "dark"));
       }
    }

    useEffect(() => {
        setTheme(localStorage.getItem('currenttheme'));
    })
  return [theme, handleTheme];
     {/* <p>currenttheme is {theme}</p> */}
};

export default ToggleTheme;
