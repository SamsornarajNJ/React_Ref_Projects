import React from "react";

const Splice = () => {
  // Array.splice(startIndex, deleteCount, item1,item2) //syntax of the splice. item1, item2 are adding elements
  const arr = [5, 10, 15, 20, 25];
  //Remove the second element from an array.
  // console.log(arr.splice(1,1), "Array is", arr );

  //Remove the last two elements from an array.
  //console.log(arr.splice(-2), "Array is", arr); // not recommanded 
  //console.log(arr.splice(-2, 2), "Array is", arr); // recommanded even same o/p, mention deletecount in splice
  
  //Insert a new element (50) at index 2 without removing anything.
  //console.log(arr.splice(2,0,50), "Array is", arr);

  //Replace the third element in an array with 99.
  //console.log(arr.splice(2, 1, 99), "Array is", arr);
  
  //Remove all elements from index 1 onwards.
  //console.log(arr.splice(1), "Array is", arr);

  //When it comes to splice it will not work directly on array we should convert them string array
  let str = "hello";
  //Remove the second character from a string.
  //const strToArrstr = str.split("");
  //strToArrstr.splice(1,1).join(""); //should not use join with splice bez it returns removed value
  //strToArrstr.splice(1,1);
  //str = strToArrstr.join("");
  //console.log(`strToArrstr.splice(1,1) strToArr is ${strToArrstr} str is ${str}`);

  //Insert Z at index 3 in a string.
  //const strToArr = str.split("");
  //strToArr.splice(2,0,"z");
  //str = strToArr.join("");
  //console.log(str);
  
  //Replace the fourth character with X.
  //const strToArr = str.split("");
  //strToArr.splice(3,1,"X");
  //str = strToArr.join("");
  //console.log(str); 
  
  //Remove the last two characters from a string.
  //const strToArr = str.split("");
  //strToArr.splice(-2,2);
  //str = strToArr.join("");
  //console.log(str);  

  //Remove everything from index 2 onwards in a string.
  //const strToArr = str.split("");
  //strToArr.splice(2); 
  //str = strToArr.join("");
  //console.log(str);
  
  return <div>splice</div>;
};

export default Splice;
