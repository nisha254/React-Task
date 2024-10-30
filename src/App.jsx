import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
