import React,{useState,useEffect} from 'react';
import axios from '../axios';

const Row = ({title,fetchURL}) => {
    const [movies,setMovies] = useState([]);

    const fetchData = async () => {
        const req = await axios.get(fetchURL);
        console.log(req);
    }
    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row 
