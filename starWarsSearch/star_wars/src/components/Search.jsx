import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search}/${id}`)
    }


    return(
        <>
            <div className='nav'>
                <form onSubmit={handleSubmit} className='form'>
                    <div>
                        <label>Search for:</label>
                        <select defaultValue={"DEFAULT"} onChange={(e) => setSearch(e.target.value)}>
                            <option value="DEFAULT" disabled>Select</option>
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="starships">Starships</option>
                        </select>
                    </div>
                    <div>
                        <label>ID:</label>
                        <input type="text" value={id}  onChange={(e) => setId(e.target.value)}/>
                    </div>
                    <button>Search</button>
                </form>
            </div>
        </>
    )
}

export default Search;