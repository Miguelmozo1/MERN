import axios from 'axios';
import React,{ useState, useEffect } from 'react';

const Display = () => {


    const [person, setPerson] = useState([])
    const [car, setCar] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/match")
        .then((res) => {
            console.log(res.data)
            setPerson(res.data.person)
            setCar(res.data.car)
        })
        .catch((err) => {
            console.log(err)

        })
    }, [])


    return(
        <>
        <div className='container'>
            <div className='col'>
                <div className='header'><h1>Client</h1></div>
                <h2>First Name: {person.firstName}</h2>
                <h2>Last Name: {person.lastName}</h2>
                <h3>About: {person.bio}</h3>
            </div>
            <div className='col'>
                <div className='header'><h1>Car</h1></div>
                <h2>Vehicle: {car.vehicle}</h2>
                <h2>Type: {car.type}</h2>
                <h2>Manufacturer: {car.manufacturer}</h2>
                <h2>Color: {car.color}</h2>
            </div>
        </div>
        </>
    )
}

export default Display;