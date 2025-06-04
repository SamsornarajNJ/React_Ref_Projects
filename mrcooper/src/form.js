import React, { useCallback, useEffect, useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, SetError] = useState({
    nameError: "",
    emailError: "",
    ageError: "",
  });
  const [enableBtn, setEnableBtn] = useState(false);

  const testEmail = useCallback((email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  },[])
  
  const nameCheck = (value) => {
    //useStates are asynchronous
    setname(value);
    console.log(name);

    if (!value) {
      SetError((prev) => ({...prev, nameError : "message should not be empty"}));
    } else {
      SetError((prev) =>  ({...prev, nameError: "" }));
    }
  };

  const EmailCheck = (value) => {
    setEmail(value);
    
    if(!testEmail(value)) {
        SetError((prev) => ({...prev, emailError: "Invalid email" }));
    } else {
        SetError((prev) => ({...prev, emailError: "" }));
    }
  };

  const ageCheck = (value) => {
    //age is number so number doesn't has value.length 
    setAge(value);
    if (!value || value >= 18 || value <= 0) {
        SetError((prev) => ({...prev, ageError: "greater than 18 and should not be empty or 0" }));
      console.log(`agecheck is rendering ${value}`);

    } else {
        SetError((prev) => ({...prev, ageError: "" }));
       console.log(`agecheck is rendering ${value}`);
       
    }
  };

  useEffect(() => {
    if (name && testEmail(email) && age > 0) {
        setEnableBtn(true);
        console.log(`useEffect is working ${age} enableButton ${enableBtn}`);
      }
      else {
        setEnableBtn(false);
        console.log(`useEffect is working ${age} enableButton ${enableBtn}`);

      }
//console.log(age <= 0 ? "(useEffect)less then 0" : "(useEffect)greter than 0",);
    
  },[name, age, testEmail , email]);

  const handleClick = () => {
    setname("");
    setAge("");
    setEmail("");   
  };

  return (
    <div>
      <form>
        {error.nameError}
        <br />
        <label>Name </label>
        <input type="text" value={name} onChange={(e) => {nameCheck(e.target.value);}} /> <br />
        {error.emailError} <br />
        <label>Email </label>
        <input type="email" value={email} onChange={(e) => {EmailCheck(e.target.value);}}/> <br />
        {error.ageError} <br />
        <label>Age </label>
        <input type="number" value={age} onChange={(e) => {ageCheck(e.target.value);}}/> <br />
        {enableBtn && (
          <button type="button" onClick={() => handleClick()}>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
