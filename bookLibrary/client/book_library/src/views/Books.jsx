import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res.data)
                setBooks(res.data)
            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    return (
        <>
            <div className='container'>
                <table className='table table-hover table-dark'>
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Page Count</th>
                            <th scope="col">In Stock</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, index) => (
                                <tr key={index}>
                                    <th scope="row">{book.title}</th>
                                    <th scope="row">{book.author}</th>
                                    <th scope="row">{book.pages}</th>
                                    <th scope="row">{book.isAvailable.toString()}</th>
                                    <th scope="row"><Link to={`/edit/${book._id}`}>edit</Link> | <Link to={`/book/${book._id}`}>details</Link></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Books;