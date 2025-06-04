import React from 'react'

const BasicJsProgram = () => {
    //Check property Exists in the objects.
    const car = {brand : "Toyato", modal: "Camry"};
    console.log("brand" in car); //true
    console.log(car.hasOwnProperty("brand"));

    //Loop through Object Properties
    //Syntax --> for(let key in object)
    for(let key in car) {
        console.log(key, ".." + car[key]);
    }

    //Count properties in objects
    //Syntax --> Object.keys(objectname).length
    console.log(Object.keys(car).length);
    
    //Convert objects into array
    console.log(Object.entries(car)); // [["brand", "Toyoto"], ["modal", "Camry"]]
    console.log(Object.keys(car)); // ["brand","modal"]
    console.log(Object.values(car)); // ["Toyato", "Camry"]

    //Merge two Objects
    const a = { x: 1, y: 2 };
    const b = { y: 3, z: 4 };
    const c = {...a, ...b};
    console.log(c);

    //Find Key by Value
    for(let key in car) {
      if(car[key] === "Toyato") {
        console.log(key);
      }
    }
        
    //Renaming the variable while destructuring 
    const user = {
      username: "johndoe",
      location: "USA"
    };

    const {username: name, location: country} = user;
    console.log(user.username);

    //Nested Destructuring 
    const user1 = {
      name: "Mike",
      address: {
        city: "London",
        zip: "12345"
      
      }
    };
    const { address: { city: userCity } } = user1;
    console.log(user1.address.userCity);

   // const {address: {city: Town} } = user1; // we only rename property names and can't update the values while destructuring.
   //console.log(Town);

   function greet ({name}) {
      return `Hello ${name}`;
   }

   const user2 = {name: "sam"};
   console.log(greet(user2));

  

  //  const sayhello = greet.bind(user2);
  //  console.log(sayhello());

  const {...rest} = user2;
  console.log(rest);

  //Destructuring Arrays in Objects
  const data = {
    users:["Tom", "Cherry"]
  }
  const { users:[firstUser] } = data;
  console.log(firstUser);

  const person = null;
  //const { nation } = person; 
  //console.log(nation); // o/p null -> const { nation } = person || {}; console.log(nation) --> o/p -> undefined

  // const user = {
  //   firstName: "Lara",
  //   job: "Developer"
  // };
  
  // const { firstName: name = "Default", age = 30 } = user;
  // console.log(name, age); // ?
  
  

  
  return (<>
    <div>BasicJsProgram</div>
    </>)
}

export default BasicJsProgram