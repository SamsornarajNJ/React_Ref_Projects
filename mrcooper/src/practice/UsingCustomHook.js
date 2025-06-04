import React from "react";
import useCustomHook from "./CustomHook";

const UsingCustomHook = () => {
    const {data, loading, error} = useCustomHook();
  return (
    <>
         <h2>UsingCustomHook</h2>
         <p>{loading ? "...Loading" : "" }</p>
         <p>{error ? error : ""}</p>
         {data?.length > 0 && data.map((item, index) => (
           <ul key={item.id}>
            <li>{item.id}</li>
            </ul>
         ))}
    </>
  );
};

export default UsingCustomHook;
