import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Button from './components/Button';
import Display from './views/Display';

function App() {


  return (
    <BrowserRouter>
      <Button />
      <Routes>
        <Route path="/" element={<Display />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
