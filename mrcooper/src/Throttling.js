import React, { useEffect, useState } from "react";
function throttle(func, delay) {
    let flag;
    return function(...args) {
      if(!flag) {
        func.apply(this, args);
        flag = true;
        setTimeout(()=> {
            flag = false;
        },delay)
      }
    }
}

const Throttling = () => {
    const [scrollY, setScrollY] = useState();

    useEffect(()=> {
        const handlefn = () => {
            setScrollY(window.scrollY);
            console.log("scroll point", window.scrollY);
        }
        
        const betterfun = throttle(handlefn, 300);
        window.addEventListener('scroll', betterfun);

        return () => {
            window.removeEventListener("scroll", betterfun);
          };
    }, [])

  return (
    <div>
      <div style={{ height: "200vh", padding: "20px" }}>
        <h2>Scroll Position: {scrollY}px</h2>
        <p>Scroll down to see the throttled scroll position update.</p>
      </div>
    </div>
  );
};

export default Throttling;
