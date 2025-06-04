import axios from "axios";
import React, { useEffect, useState } from "react";

const Grorilla = () => {
  const [state, setState] = useState([]);
  let selelctedIds = [10, 11, 12, 13];
  const apiFetch = async () => {
    try {
      const apiFetchArr = selelctedIds.map((id) =>
        axios.get(
          `https://nextjs-boilerplate-five-plum-29.vercel.app/api/users/${id}`
        )
      );
      console.log(apiFetchArr);
      const fetchAllPromise = await Promise.allSettled(apiFetchArr);
      console.log(fetchAllPromise);

      const storeAllPromise = fetchAllPromise.map((item) =>
        item.status === "fulfilled" ? item.value.data : null
      );
      console.log(storeAllPromise);

      setState(storeAllPromise.filter(Boolean));
      console.log(state);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apiFetch();
  }, []);
  return <div>
    <h1>Grorilla</h1>
    {state?.length > 0 && (state.map((item,index) => (
     <div>{JSON.stringify(state, null, 2)}</div> 

    )))}
    </div>;
};

export default Grorilla;
