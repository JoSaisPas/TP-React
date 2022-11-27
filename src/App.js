import React from 'react';
import Recettes from './components/Recettes'
import {BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Blog from './components/Blog';



const App = () => {

    return (
          <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Recettes/>}></Route>
                    <Route path='/Blog' element={<Blog/>}></Route>
                    <Route path='/Recettes' element={<Recettes/>}></Route>
                </Routes>
            </BrowserRouter>
          
    );
  
};



export default App;

