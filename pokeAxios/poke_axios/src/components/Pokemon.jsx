import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then(response=>{setData(response.data.results)})
    }, [])

    return (
        <>
            <div>
                {
                    data.map((poke, index) => (
                        <p key={index}>{poke.name}</p>
                    ))
                }
            </div>
        </>
    )
}

export default Pokemon