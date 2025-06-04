import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Photon = () => {
    const [users, setUsers] = useState();
    const [specUser,setSpecUser ] = useState();
    const getFetch = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const usersData = response.data;
            setUsers(usersData);            
        } catch (error) {
            console.log(error);
        }
    }

    const userInfo = async (id) => {
       try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = response.data;
        setSpecUser([userData]);
        console.log(specUser);
        
       }catch(error) {
         console.log(error);
         
       }
    }

    useEffect(() => {
        getFetch();
        console.log(users);
    },[])
  return (
    <>
    <h1>Welcome</h1>
    <ul>
    {users?.length > 0 && users.map((user, index) => (
        <li key={index} onClick={() => userInfo(user.id)}> {user.name}</li>
    ))}
    </ul>

    <h1>Specific User</h1>
    <div>
    {specUser?.length > 0 && specUser.map((user, index) => (
        <div key={index}> 
        <h2>{user.name}</h2>
        <h2>{user.id}</h2>
        <h2>{user.email}</h2>
        </div>
    ))}
    </div>
    </>
  )
}

export default Photon