import React from "react";

const SpeadOperator = () => {
  //Spread operator expands the elements of iterable (like an array,string, objects) into individual elements
  //syntax
  //[...iterable]
  //{...Object}

  let arr1 = [1, 2, 3];
  // Copying an Array
  // console.log([...arr1]);

  //Merging Arrays
  let arr2 = [4, 5, 6];
  //console.log([...arr1,...arr2]);

  //Spreading in Function Arguments
  let arr = [1, 2, 3];

  //  const sum = (a, b, c) => {
  //     return a + b + c;
  //   };
  // console.log(sum([...arr])); ❌ Wrong: Passing an array instead of separate values
  //console.log(sum(...arr));

  let str = "hello";
  // Spreading a String into an Array
  // console.log([...str]);
  
  // Merging Objects
  //  let object1 = {name : "sam", age : "27"};
  //  let object2 = {city : "Chennai", country : "India"};
  //  let merged = {...object1,...object2};
  //  console.log(merged);

  //Overriding Properties
  // let object1 = {name: "Sam", age: 20};
  // let object2 = {city: "Chennai", age: 27};
  // console.log({...object1, ...object2}); //{name: 'Sam', age: 27, city: 'Chennai'}
 
  //Rest Operator
  //Normal function
  // const sum = (...number) => {
  //  return number;
  // }
  // console.log(sum(1,2,3));

  //Mixing Fixed Parameters with Rest Operator
  function greet (first,...remaining) {
    return `${first} and ${remaining}`;
  }

 // greet("Samnj", "sam","nj","10","Work");
  console.log(greet("Samnj", "sam","nj","10","Work"));

  
  return <div>SpeadOperator</div>;
};

export default SpeadOperator;
