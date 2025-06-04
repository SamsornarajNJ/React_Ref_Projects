import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffect = () => {
    //Auto save
//   const [text, setText] = useState("");
//   useEffect(() => {
//     let timer;
//     timer = setTimeout(() => {
//       console.log("Auto save", text);
//     }, 1000);

//     return(() => clearTimeout(timer));
//   }, [text]);

//  Live Search (with Fetch + Debounce)
const [query, setQuery] = useState("");
const [results, setResults] = useState([]);
useEffect(()=> {
   let timer;
   if(!query) {
    setResults([]);
   };
   if(query) {
    timer = setTimeout(async () =>{
       const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
       const data = response.data;
       setResults(data);
       console.log(results);
       
    },1000);

    return(()=> clearTimeout(timer));
   }
},[query])

  return (
    <>
      <div>UseEffect</div>
      {/* //Pretend to Auto save Form */}
      {/* <input type="search" placeholder="Search" value={text} onChange={(e) => setText(e.target.value)} /> */}

      {/* //Live Search (axios-get with debouncing) */}
      <input type="search" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>
      {results.length > 0 && results.map((item,index)=> (
        <div key={index}>
            <p>{item.userId}</p>
            <p>{item.title}</p>
            </div>
      ))}
    </>
  );
};

export default UseEffect;
