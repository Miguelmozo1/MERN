import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [book, setBook] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data)
                setBook(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteBook = () => {
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data)
                navigate("/")
            })
    }

    return (
        <>
            <header className='nav'><h1>{book.title}</h1></header>
            <div className="container">
                <h1>Author: {book.author}</h1>
                <h2>Number of Pages: {book.pages}</h2>
                {
                    book.isAvailable? 
                    <button onClick={deleteBook}>Rent</button>
                    : <h3>Not in Stock</h3>
                }
            </div>
        </>
    )
}

export default Book;