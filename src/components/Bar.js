import {React, useEffect, useState} from 'react';
import  '../css/Bar.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";



const base_url = "https://image.tmdb.org/t/p/original";



const Bar = ({title, url, isLarge}) => {  

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")



    useEffect(() => {
        const fetchMovies = async () => {
            await fetch(url,{
                method: "GET"
            })
            .then(res => res.json())
            .then(data => setMovies(data.results))
        }
        fetchMovies();
    }, [url])

    const opts = {
        heigth: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        },
    }

    const handleClick = e => {
        if(trailerUrl){
            setTrailerUrl("")
        } else {
            movieTrailer(e?.name || "")
            .then(url => {
                const urlPar = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlPar.get("v"))
            })
            .catch((err => console.log(err)))
        }
    }

    
    return (
        <>
        <div className="bar">
            <h2>{title}</h2>  

            <div className="barPost">
                {movies.map(e => {
                    return (
                        <>
                        <img key={e.id}
                        onClick={handleClick(e)}
                        className={`imagePost ${isLarge && "barPostLarge"}`}
                        src={`${base_url}${isLarge 
                            ? e.poster_path
                            : e.backdrop_path}`} 
                        alt={e.name}/>
                        </>
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>

        </>
    )
}

export default Bar;