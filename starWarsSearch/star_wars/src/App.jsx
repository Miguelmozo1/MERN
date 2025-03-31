import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search'
import Display from './views/Display';

function App() {

  return (
    <BrowserRouter>
      <Search/>
      <Routes>
        <Route path={"/:input/:id"} element={<Display />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
