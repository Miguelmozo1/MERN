import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Weather from './views/Weather';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Search />
        <Routes>
          <Route path={"/:lat/:long/:date"} element={<Weather />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
