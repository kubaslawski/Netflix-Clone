import {React, useEffect, useState} from 'react';
import {requests} from "../api/constants";


const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovie = async () => {
            await fetch(requests.netflixOriginals,{
                method: "GET"
            }) 
            .then(res => res.json())
            .then(data => setMovie(data.results[
                Math.floor(Math.random() * data.results.length)
            ]
            ))
        } 
        fetchMovie();
    }, [])

    console.log(movie)

    return (
        <>
        <header>

        </header>
        </>
    )
}

export default Banner;