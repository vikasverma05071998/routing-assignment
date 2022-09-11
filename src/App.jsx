import React from "react";
import './App.css'

import Mounting from './Component/Mounting'
import Unmounting from "./Component/Unmounting";
import Update from "./Component/Update"
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'


class App extends React.Component{
    render(){
        return(
            <div className="Containor">
            <Router>
            <div className='heading'>
      
      <h1 id='comp'>Component Life Cycle</h1>
      <Link to="" id='head'>Mounting</Link>
      <Link to="/update" id='dash'>Updating</Link>
      <Link to="/unmounting" id='use'>Unmounting</Link>
      
  </div>              
              <Routes>
                <Route path="" element={<Mounting/>}/>
                 <Route path="/Update" element={<Update/>}/> 
                 <Route path="/Unmounting" element={<Unmounting/>}/>
                 
                 
                 </Routes>
                
            </Router>
            </div>
        )
    }
}
export default App
