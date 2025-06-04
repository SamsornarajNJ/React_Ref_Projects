import React, { useEffect, useState } from "react";

const ThisKeyword = () => {
    //Syntax - someFunction.apply(someObject, [args])
  //How sayHello() doesn't have params, then how it accepts person objects, - Bez inside the function, you're using this.name.
  // function sayHello() {
  //     alert('Hello' + this.name);
  // }

  // const person = {name: "Sam"};
  // sayHello.apply(person);
  //This is not a closure because: sayHello() is not using or remembering any outer scope variables

  //Closure function
  //  function outer() {
  //    let name = "Alice";
  //    function inner() {
  //      console.log("Hello", name);
  //    }
  //    return inner;
  //  }

  //   const greet = outer();
  //   greet();

const [input, setInput] = useState("");
const [debouncing, setDebouncing] = useState("");

useEffect(() => {
 let timer;
 timer = setTimeout(() => {
    setDebouncing(input);
 }, 500);   
 return () => clearInterval(timer);
});

useEffect(() => {
   if(debouncing) {
    console.log("API call with : ", debouncing);
   }
},[debouncing])

//API call (debouncing)
 // API call when debounced value changes
 useEffect(() => {
    if (debouncing.trim()) {
      // Simulate API call
      fetch(`https://jsonplaceholder.typicode.com/users?name=${debouncing}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("🔍 Fetched Data:", data);
        })
        .catch((error) => {
          console.error("❌ Error fetching data:", error);
        });
    }
  }, [debouncing]);

  return <div>
    <h1>Debouncing</h1>
    <input value={input} type="text" onChange={(e) => {setInput(e.target.value)}}/>
  </div>;
};

export default ThisKeyword;
