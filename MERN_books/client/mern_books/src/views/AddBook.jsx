import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'

const AddBook = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(0)
    const [isAvailable, setIsAvailable] = useState(false)

    const [titleError, setTitleError] = useState("")
    const [authorError, setAuthorError] = useState("")
    const [pagesError, setPagesError] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/books", {
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
        setTitle("")
        setAuthor("")
        setPages(0)
        setIsAvailable(false)
    }

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
            <div>
                <Link to={"/"}>Catalog</Link>
                <form onSubmit={handleSubmit}>
                    <h2>Add Book</h2>
                    <label>Title: <input type="text" value={title}  onChange={(e) => handleTitle(e)}/></label>
                    {titleError? <p>{titleError}</p> : ""}
                    <label>Author: <input type="text" value={author} onChange={(e) => handleAuthor(e)}/></label>
                    {authorError? <p>{authorError}</p> : ""}
                    <label>Page Count: <input type="number" value={pages} onChange={(e) => handlePages(e)}/></label>
                    {pagesError? <p>{pagesError}</p> : ""}
                    <label>Is Available: <input type="checkbox" value={isAvailable} onChange={(e) => handleAvailability(e)}/></label>
                    <button>Add Book!</button>
                </form>
            </div>
        </>
    )
}

export default AddBook