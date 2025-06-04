import React from "react";

const BasicProgram = () => {
  //Set prefinded function
  //const array1 = [1,2,3,4,5,6,7,8,2];
  // let duplRemoved = new Set(array1);
  // console.log(duplRemoved); //output Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
  //let duplRemoved = new Set(...array1); // error bez Set expects single array to iterate
  //let duplRemoved = new Set([...array1]); // values with same array, it just copy the array and done set method
  //let duplRemoved = [new Set(array1)]; //o/p [ Set(8) {1, 2, 3, 4, 5, 6, 7, 8} ]
  // let duplRemoved = [...new Set(array1)]; // is equal to let duplRemoved = [new Set(array1)]; duplRemovedNew = [...duplRemoved]
  //[...new Set()] //set back into normal array
  // console.log(duplRemoved);

  //.flat() //removes nested arrays by flattening them up to a specified depth.
  //const arr = [1, 2, [3, 4], [5, 6],7];

  //Basic flat array
  //console.log(arr.flat());

  //Flatening multiple Levels (flat(depth))
  //const deepArr = [1, [2, [3, [4, 5]]]];
  //console.log(deepArr.flat(3)); // Output: [1, 2, 3, 4, 5]

  //Basic flatMap()
  const arr = [1, 3, 2, 4, 5, 6];
  //const flatmapResult = arr.flatMap((item,index) =>[item, item * 2]); //[[1, 2], [2, 4], [3, 6]] → final o/p [1, 2, 2, 4, 3, 6]
  //console.log(flatmapResult);

  //Without .flatMap() (Longer Way)
  //const flatmapResult = arr.map((item) => [item, item * 2]).flat(1);
  //console.log(flatmapResult);

  //Removing Empty Elements //.flatMap() is useful when filtering empty values:
  //when the output will be [[2], [4], [6]] like this.... while map. flatMap() is used to automatic flatten array
  // const words = ["hello", "", "world", "   "];
  // const sam = words.flatMap((item) => item.trim() ? item : [] );
  // console.log(sam);

  //const arr = [1, [2, [3, [4, 5]]]];

  //console.log(arr.flat());
  // Default depth = 1
  // Output: [1, 2, [3, [4, 5]]]

  //console.log(arr.flat(2));
  // Flattens up to depth = 2
  // Output: [1, 2, 3, [4, 5]]

 // console.log(arr.flat(Infinity));
  // Completely flattens the array
  // Output: [1, 2, 3, 4, 5]

//const result = arr.flatMap(x => x * 2); // Not returning an array
//console.log(result);
// Output: [2, 4, 6]  (Same as `.map()`)

//console.log(flattenArray(arr));



  return <div>BasicProgram</div>;
};

export default BasicProgram;
