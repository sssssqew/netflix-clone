import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register, Login, Home } from 'pages'

import './index.css'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
};
  
ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, 
                document.getElementById("app"));