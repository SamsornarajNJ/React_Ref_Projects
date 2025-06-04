import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface Geo {
    lat: string;
    lng: string;
}
interface Address {
    street : string;
    suite: string;
    city: string;
    zipcode : string;
    geo : Geo;
}
interface Company {
    name : string;
    catchPhrase : string;
    bs : string;
}
interface User {
    id: number;
    name: string,
    username: string,
    email: string,
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const GetUserDetails = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User | null>();

    const getUsers = async () => {
     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
     const data : User[] = response.data;
     setUsers(data);
    }

    const getUser = async (id:number) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data: User = response.data;
        setUser(data);
    }

    useEffect(() => {
       getUsers();
    },[])
  return (
    <>
      {users?.length > 0 && users.map((item) => (
        <ul key={item.id}>
        <li onClick={() => getUser(item.id)} style={{color: 'green'}}>{item.id}</li>
        <li>{item.name}</li>
        <li>{item.email}</li>
        <li>{item.phone}</li>
        <li>{item.username}</li>
        <li>{item.address.street}</li>
         <li>{item.address.city}</li>
          <li>{item.address.suite}</li>
           <li>{item.address.zipcode}</li>
            <li>{item.company.bs}</li>
             <li>{item.company.catchPhrase}</li>
             <li>{item.company.name}</li>
             <li>{item.website}</li>
             <li>{item.address.geo.lat}</li>
             <li>{item.address.geo.lng}</li>
        </ul>
      ))}

      {user && (
        <>
          <h2>Selected User</h2>
          <ul key={user.id} style={{ backgroundColor: '#f9f9f9', padding: '10px' }}>
            <li>ID: {user.id}</li>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Username: {user.username}</li>
            <li>Street: {user.address.street}</li>
            <li>City: {user.address.city}</li>
            <li>Suite: {user.address.suite}</li>
            <li>Zipcode: {user.address.zipcode}</li>
            <li>Lat: {user.address.geo.lat}</li>
            <li>Lng: {user.address.geo.lng}</li>
            <li>Company: {user.company.name}</li>
            <li>CatchPhrase: {user.company.catchPhrase}</li>
            <li>BS: {user.company.bs}</li>
            <li>Website: {user.website}</li>
          </ul>
        </>
      )}
    </>
  )
}

export default GetUserDetails