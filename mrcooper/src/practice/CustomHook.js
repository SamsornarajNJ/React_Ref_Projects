import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CustomHook = () => {
    const [ data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetch = async() => {
       try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
        setLoading(false);
       } catch (error) {
         setError(error);
       }
    }

    useEffect(() => {
        fetch();
    },[])

    return {data,loading,error};
}

export default CustomHook