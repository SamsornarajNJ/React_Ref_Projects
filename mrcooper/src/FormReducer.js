// import { type } from "@testing-library/user-event/dist/type";
// import React, { useReducer } from "react";

import { useRef } from "react";

// const initialValues = {
//   name: "",
//   email: "",
// };

// function formFn(formState, action) {
//   switch (action.type) {
//     case "UPDATE":
//       return { ...formState, [action.field]: action.value };
//     case "RESET":
//       return initialValues;
//     default:
//       return formState;
//   }
// }

 const FormReducer = () => {
//   const [formState, dispatch] = useReducer(formFn, initialValues);

//   const handleChangeName = (e) => {
//      dispatch({
//         type:"UPDATE",
//         field: "name",
//         value: e.target.value
//      })
//   }

//   const handleChangeEmail = (e) => {
//     dispatch({
//         type: "UPDATE",
//         field: "email",
//         value: e.target.value
//     })
//   }
//   return (
//     <>
//       <div>FormReducer</div>

//       <form>
//         <input type="name" placeholder="Enter Name" value={formState.name} onChange={(e) => handleChangeName(e)}/>
//         <input type="email" placeholder="Enter Email" value={formState.email} onChange={(e) => handleChangeEmail(e)}/>
 
//       </form>
//     </>
//   );

    const divRef = useRef(null);
  
    const handleClick = () => {
      divRef.current.scrollIntoView({ behavior: 'smooth' }); // scrolls to element
      divRef.current.style.backgroundColor = 'yellow'; // changes background
    };
  
    return (
      <>
        <button onClick={handleClick}>Go to Box</button>
        <div style={{ marginTop: '1000px' }} ref={divRef}>
          👋 I’m the box you scrolled to!
        </div>
      </>
    );
  }

 export default FormReducer;
