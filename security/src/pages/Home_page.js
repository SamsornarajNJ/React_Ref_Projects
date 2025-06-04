import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/authSlice';

const Home_Page = () => {
    const dispatch = useDispatch();
  return (
    <>
    <h1>HomePAge</h1>
    <button onClick={() => dispatch(logout())}></button>
    </>
  )
}

export default Home_Page; 