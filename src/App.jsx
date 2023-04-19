import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import {SignUp} from './components/Sign Up/signup'
import { Dashboard } from './components/Dashboard/Dashboard';
import { Home } from './components/Home/Home';



function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </div>
  )
}

export default App
