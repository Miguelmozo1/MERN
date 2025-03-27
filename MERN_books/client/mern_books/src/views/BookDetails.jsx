import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const BookDetails = () => {

    const navigate = useNavigate();

    const [book, setBook] = useState([])
    const {id} = useParams();

    const deleteBook = () => { 
        axios.delete(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/")
        })
}
    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data);
                setBook(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="container">
                <header className="heads">
                        <div className="links">
                            <Link to={"/"}>Catalog</Link>
                            <Link to={"/books"}>Add Book</Link>
                        </div>
                        <h1>Book Catalog</h1>
                </header>
                <div className="book">
                    <h1>{book.title}</h1>
                    <h3>By {book.author}</h3>
                    <p>Page Count: {book.pages}</p>
                    {book.isAvailable? 
                        <div>
                            <p>Is available</p>
                            <button onClick={() => deleteBook()}>Check-Out</button>
                        </div>
                        : 
                            <p>Not in stock</p>}
                </div>
            </div>
        </>
    )
}

export default BookDetails;