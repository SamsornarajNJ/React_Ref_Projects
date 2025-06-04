import React from "react";

const Reverse = () => {
  //syntax
  //Array.reverse(); //reverse the original array
  //Note:- reverse() does not have a separator like reverse("") or reverse(",").

  //let arr = [1, 2, 3, 4, 5];
  //console.log(arr.reverse());

  //Reversing Strings (Using split(), reverse(), join())
  let str = "Hello";
  //console.log(str.split().reverse().join());

  let stringArr = ["Apple", "Banana", "Grape"];
  //Reversing an Array of Strings
  //console.log(stringArr.reverse());

  //Reversing Without Mutating (Using slice())
  const duplStr = stringArr.slice();
  duplStr.reverse();
  console.log(duplStr);

  return <div>reverse</div>;
};

export default Reverse;
