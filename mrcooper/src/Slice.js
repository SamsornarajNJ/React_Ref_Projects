import React, { useCallback, useEffect, useState } from "react";

const Slice = () => {
  const [answer, SetAnswer] = useState();
  var arr = [1, 2, 3, 4, 5];

  //Remove first two elements in the array
  // let removedArr = arr.slice(2);
  // console.log("Removed Arr", removedArr);

  //Extract the last two elements from an array
  // let extractLastTwo = arr.slice(-2);
  //console.log(extractLastTwo);

  //Extract elements from index 1 to 3 (excluding index 3).
  //console.log(arr.splice(1,3));

  //Create a copy of an array using slice.
  //console.log(arr.slice());

  //Remove the first two elements from an array without modifying it.
  //console.log(arr.slice(2));

  const str = "Hello world";
  //Extract the first four characters from a string. // Note:- endIndex consider it as before that indexValue
  //console.log(str.slice(0,5));

  //Extract the last three characters from a string.
  //console.log(str.slice(-3));

  //Extract the substring from index 2 to 6 (excluding 6).
  //console.log(str.slice(str.indexOf("llo"), str.indexOf(" ")));

  //Remove the first 3 characters from a string.
  //console.log(str.slice(3));

  //Extract everything except the last two characters from a string.
  //console.log(str.slice(-2));

  //Extract substring without mentioning the index values
  //find starting index and endIndex
//   let substring = "worl";
//   let start = str.indexOf("worl");
//   let end = start + substring.length;  

//   if (start !== -1) {
//    console.log(str.slice(start,end));
//   }

  //Extract everything except the last two characters from a string.
  console.log(0, -2);
  

  //   useEffect(() => {
  //     SetAnswer(extractLastTwo);
  //   }, []);

  return <>{answer}</>;
};

export default Slice;
