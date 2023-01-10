import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Companies from "./components/Companies";
import Employees from "./components/Employees";



function App() {


  return (
      <div className="wrapper">
        <div className="table">
        
        <Routes>
          <Route path='/' element={<Companies />} />
          {/* <Route path='/workers/:id' element={<Employees />} /> */}
          <Route path="*" element={<div className="not-found">...Nothing was found</div>}/>
        </Routes>
        </div>
      </div>
  );
}

export default App;
