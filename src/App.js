import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';

function App() {
  return (
    <>
      
        <Router>
           <Header/>
          <Routes>
          <Route  path='/' element={<Homepage/>}></Route> 
          <Route path='/coins' element={<CoinPage/>}></Route>
          
          
          </Routes>
        
        
        </Router>
      
    </>
  );
}

export default App;
