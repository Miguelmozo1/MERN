import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const Edit = () => {

    const navigate = useNavigate();
    
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState("")
    const [isAvailable, setIsAvailable] = useState("")

    const [titleError, setTitleError] = useState("")
    const [authorError, setAuthorError] = useState("")
    const [pagesError, setPagesError] = useState(0)

    const {id} = useParams();

    const updateBook = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/books/${id}`, {
            title,
            author,
            pages,
            isAvailable
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            navigate("/")
        })
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setPages(res.data.pages)
                setIsAvailable(res.data.isAvailable)
            })
            .catch ((err) => {
                console.log(err);
            })
    }, [])
        const handleTitle = (e) => {
        setTitle(e.target.value)
        if (e.target.value.length < 2){
            setTitleError("Must be greater than 2 characters")
        }
        else{
            setTitleError("")
        }
    }
    const handleAuthor = (e) => {
        setAuthor(e.target.value)
        if(e.target.value.length < 2) {
            setAuthorError("Author must be more than 2 character")
        }
        else {
            setAuthorError("")
        }
    }
    const handlePages = (e) => {
        setPages(e.target.value)
        if(e.target.value <= 0) {
            setPagesError("Must be at least one page")
        }
        else{
            setPagesError("")
        }
    }
    const handleAvailability = (e) => {
        if(e.target.value = !isAvailable) {
            setIsAvailable(true)
        }
        else{
            setIsAvailable(false)
        }
    }

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
                <form onSubmit={updateBook}>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => handleTitle(e)}/>
                    {titleError? <p>{titleError}</p> : ""}
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => handleAuthor(e)}/>
                    {authorError? <p>{authorError}</p> : ""}
                    <label>Pages:</label>
                    <input type="number" value={pages} onChange={(e) => handlePages(e)}/>
                    {pagesError? <p>{pagesError}</p> : ""}
                    <label>Is Available:</label>
                    <input type="checkbox" value={isAvailable} onChange={(e) => handleAvailability(e)}/>
                    <button>Update</button>
                </form>
            </div>
        </>
    )
}

export default Edit;