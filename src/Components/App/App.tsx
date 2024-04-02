import { useState } from 'react'

import '../App/App.scss'

import { Outlet } from 'react-router-dom';
import React from 'react';

function App() {


  return (
    /* Elements sent by children will replace the Outlet */
    <Outlet />
  );
}

export default App