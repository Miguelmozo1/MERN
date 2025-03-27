import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {

    const [books, setBooks] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res)=> {
                setBooks(res.data)
                console.log(res.data);
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
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Page Count</th>
                                <th>Available</th>
                                <th>Book Page</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    books.map((book, index) => (
                                        <tr key={index}>
                                            <th>{book.title}</th>
                                            <th>{book.author}</th>
                                            <th>{book.pages}</th>
                                            <th>{book.isAvailable.toString()} | <Link to={`/books/${book._id}/update`}>Edit</Link></th>
                                            <th><Link to={`/books/${book._id}`}>Book Details</Link></th>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}


export default Home