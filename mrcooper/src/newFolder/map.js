import React from 'react'

const Map = () => {
 const arr = [1,2,3,4,5];

 //.map(()=> expression) //no need return statement. //.map(()=> ()) are same as .map(()=> expression)
 // console.log(arr.map((item, index)=> item*2 ));
  
 //.map(() => { return name;}) //{} in map means need return.
   //console.log(arr.map((item,index) => {
   // return item * 2;
   //}));
  //.map(()=> ({})) // in map, ({}) means it creating object and no need to use return statement
  const object1 = [{name: "sam", age: 27}, {name: 'NJ', age:26}]
  //console.log(object1.map((item,index) => item[index])); // ❌ bez, objects cannot be accessed by index value
  //console.log(object1.map((item)=> item.name)); // ✅ correct way
  //console.log(object1[0]); // Can access by array of the objects 
    
  
   
  return (
    <div>Map</div>
  )
}

export default Map;