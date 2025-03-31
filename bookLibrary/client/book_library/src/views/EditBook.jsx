import { useNavigate, useParams } from "react-router-dom";
import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const EditBook = () => {

    const {id} = useParams();
    
    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(0)
    const [isAvailable, setIsAvailable] = useState(false)

    const [titleError, setTitleError] = useState("")
    const [authorError, setAuthorError] = useState("")
    const [pagesError, setPagesError] = useState(0)


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
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setPages(res.data.pages)
                setIsAvailable(res.data.isAvailable)
            })
            .catch((err) => {
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
        if(e.target.value <= 1) {
            setPagesError("Must be at least 2 pages")
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
                <form onSubmit={updateBook}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => handleTitle(e)}/>
                            {titleError? <p>{titleError}</p> : ""}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Author" value={author} onChange={(e) => handleAuthor(e)}/>
                            {authorError? <p>{authorError}</p> : ""}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Number of Pages</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control" placeholder="0" value={pages} onChange={(e) => handlePages(e)}/>
                            {pagesError? <p>{pagesError}</p> : ""}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Available for Rent</label>
                        <div className="col-sm-10">
                            <input type="checkbox" className="form-check-input" value={isAvailable} onChange={(e) => handleAvailability(e)}/>
                            <label className="form-check-label">True</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Update Book</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default EditBook;