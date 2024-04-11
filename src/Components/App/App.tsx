import { useEffect, useState } from 'react'

import '../App/App.scss'

import { Outlet } from 'react-router-dom';
import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { CheckToken } from '../../store/action/action';

function App() {


  const dispatch = useAppDispatch();

  useEffect(() => { // On component mount
    dispatch(CheckToken());// Dispatch CheckToken action to update user state
  }, [dispatch]); // Only run effect on component mount



  return (
    
    /* Elements sent by children will replace the Outlet */
    <Outlet />
  );
}

export default App

function checkToken(): any {
  throw new Error('Function not implemented.');
}
