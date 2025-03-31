import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Books from './views/Books';
import NewBook from './views/NewBook';
import EditBook from './views/EditBook';
import Book from './views/Book';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Nav  />
      <Routes>
        <Route path="/" element={<Books />}/>
        <Route path="/create/book" element={<NewBook />}/>
        <Route path="/edit/:id" element={<EditBook  />}/>
        <Route path="/book/:id" element={<Book  />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
