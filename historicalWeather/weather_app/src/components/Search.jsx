import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate();

    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");
    const [date, setDate] = useState("");

    const [latError, setLatError] = useState("");
    const [longError, setLongError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        setLat("")
        setLong("")
        setDate("")
        navigate(`/${lat}/${long}/${date}`)
    }

    const handleLat = (e) => {
        setLat(e.target.value)
        if(e.target.value < -90 || e.target.value > 90) {
            setLatError("Values must be between -90 and 90 inclusively")
        }
        else{
            setLatError("")
        }
    }
    const handleLong = (e) => {
        setLong(e.target.value)
        if(e.target.value < -180 || e.target.value > 180) {
            setLongError("Values must be between -180 and 180 inclusively")
        }
        else{
            setLongError("")
        }
    }
    const handleDate = (e) => {
        setDate(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <div>
                <h2 id='title'>Find out how the weather was on a specific day as far back as 1940!</h2>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='labels'>
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e) => handleDate(e)}/>
                    </div>
                    <div className='labels'>
                        <label>Latitude:</label>
                        <input type="number" step={0.0001} value={lat} onChange={(e) => handleLat(e)}/>
                    </div>
                    {latError? <p className='errors'>{latError}</p> : ""}
                    <div className='labels'>
                        <label>Longitude:</label>
                        <input type="number" step={0.0001} value={long} onChange={(e) => handleLong(e)}/>
                    </div>
                    {longError? <p className='errors'>{longError}</p> : ""}
                    <button>Search</button>
                </form>
            </div>
        </>
    )
}

export default Search;