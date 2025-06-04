import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

const ProtetctedRoute = () => {
    //const {isAuthenticated} = useAuth();
    //const dispatch = useDispatch<AppDispatch>();
    const {isAuthenticated} = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
     console.log("working");
     
    useEffect(() => {
      if(isAuthenticated) {
        navigate('/dashboard');
        console.log('Protected route is working');
      }
    },[isAuthenticated, navigate])
    
    if(!isAuthenticated) {
        return null;
    }
  return (
    <Outlet />
  )
}

export default ProtetctedRoute