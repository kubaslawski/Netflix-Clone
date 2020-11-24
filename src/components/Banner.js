import {React, useEffect, useState} from 'react';
import {requests} from "../api/constants";
import  '../css/Banner.css';

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

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    console.log(movie)

    return (
        <>
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center"
            }}>
            <div className="banner_contest">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
              

                <div className="banner__buttons">
                   <button className="banner_button">Play</button>
                   <button className="banner_button">My List</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                    </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
        </>
    )
}

export default Banner;