import {React, useEffect, useState} from 'react';
import  '../css/Bar.css';



const base_url = "https://image.tmdb.org/t/p/original";


const Bar = ({title, url}) => {  

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            fetch(url,{
                method: "GET"
            })
            .then(res => res.json())
            .then(data => setMovies(data.results))
        }
        fetchMovies();
    }, [])

    console.table(movies)

    return (
        <>
        <div className="bar">
            <h2>{title}</h2>  

            <div className="barPost">
                {movies.map(e => {
                    return (
                        <>
                        <img key={e.id}
                        className="imagePost"
                        src={`${base_url}${e.poster_path}`} 
                        alt={e.name}/>
                        </>
                    )
                })}
            </div>
        </div>

        </>
    )
}

export default Bar;