import React,{useState,useEffect} from 'react';
import axios from '../axios';

const Row = ({title,fetchURL}) => {
    const [movies,setMovies] = useState([]);

    

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(fetchURL);
            setMovies(req.data.results);
        }
        fetchData();
    },[fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className="row_posters">
                    {movies.map(movie => (
                        <img src={movie.poster_path} alt={movie.name}/>
                    ))}
                </div>
        </div>
    )
}

export default Row 
