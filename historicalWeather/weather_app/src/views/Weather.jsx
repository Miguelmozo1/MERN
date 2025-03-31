import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const {lat, long, date} = useParams();

    const [data, setData] = useState([]);


    const [error, setError] = useState("");




    useEffect(() => {
        axios.get(`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${long}&start_date=${date}&end_date=${date}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,snowfall_sum,wind_speed_10m_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`)
            .then((res) => {
                console.log(res.data.daily)
                setData(res.data.daily)
                setError("")
            })
            .catch((err) => {
                console.log(err)
                setData("")
                setError(err)
            })
    }, [lat, long, date])


    return (
        <>
        {error? <h1>Page Not found</h1>
            :
            <div className='wrapper'>
                <div className='container'>
                    <div className='info'>
                        <p id='temp'>Latitude: {lat}</p>
                        <p id='temp'>Longitude: {long}</p>
                    </div>
                    <div className='info'>
                        <p id='data'>↓{data.temperature_2m_min}°F</p>
                        <p id='data'>↑{data.temperature_2m_max}°F</p>
                    </div>
                    <div className='info'>
                        <p id='data'>Rainfall: {data.rain_sum} in</p>
                        <p id='data'>Snowfall: {data.snowfall_sum} in</p>
                    </div>
                    <div className='info'>
                        <p id='data'>{data.sunrise}</p>
                        <p id='data'>{data.sunset}</p>
                    </div>
                    <div className='info'>
                        <p id='data'>Max Wind Speed: {data.wind_speed_10m_max} mph</p>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Weather;