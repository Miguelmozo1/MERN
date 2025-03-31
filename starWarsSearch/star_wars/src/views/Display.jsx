import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Display = () => {

    const {input, id} = useParams();

    const [data, setData] = useState([]);
    const [error, setError] = useState("");


    useEffect(() => {
        axios.get(`https://swapi.dev/api/${input}/${id}`)
            .then((res) => {
                console.log(res.data)
                setError("")
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
                setError(err)
                setData("")
            })
    }, [input, id])

    return(
        <>
            {error? <h1 className='container'>Error 404</h1>: ""}
            {
            input == "people"?
                <div className='container'>
                    <h1>{data.name}</h1>
                    <h3>Height: {data.height}</h3>
                    <h3>Hair Color:{data.hair_color}</h3>
                    <h3>Weight: {data.mass}</h3>
                    <h3>Skin Type: {data.skin_color}</h3>
                </div>
                : null
            }
            {
                input == "planets"?
                <div className='container'>
                    <h1>{data.name}</h1>
                    <h3>Climate: {data.climate}</h3>
                    <h3>Terrain: {data.terrain}</h3>
                    <h3>Bodies of Water: {data.surface_water}</h3>
                    <h3>Population: {data.population}</h3>
                </div>
                    : null
            }
            {
                input == "starships"?
                <div className='container'>
                    <h1>{data.name}</h1>
                    <h3>Cargo Capacity: {data.cargo_capacity}</h3>
                    <h3>Manufacturer: {data.manufacturer}</h3>
                    <h3>Crew: {data.crew}</h3>
                    <h3>HyperDrive Rating: {data.hyperdrive_rating}</h3>
                </div>
                    : null
            }
        </>
    )
}

export default Display;