import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home'
import AddBook from './views/AddBook';
import BookDetails from './views/BookDetails';
import EditBook from './views/EditBook';
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<AddBook />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books/:id/update" element={<EditBook  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
