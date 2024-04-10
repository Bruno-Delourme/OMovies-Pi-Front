import { useEffect, useState } from 'react'

import '../App/App.scss'

import { Outlet } from 'react-router-dom';
import React from 'react';
import { useAppDispatch } from '../../hooks/redux';

function App() {

/* dont know where put this code  ?????

const dispatch = useAppDispatch();
    
  //check if a token stored on localStorage
  useEffect(()=>{
     if(localStorage.getItem("token")){
     dispatch(checkToken())
     }
       },[])
*/

  return (
    /* Elements sent by children will replace the Outlet */
    <Outlet />
  );
}

export default App

function checkToken(): any {
  throw new Error('Function not implemented.');
}
