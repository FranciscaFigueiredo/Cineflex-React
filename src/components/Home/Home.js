import { useEffect, useState } from "react";
import axios from 'axios'

import Movies from "../Movies/Movies";

import "./home.css"
const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get(URL)
        promise.then((data) => setMovies(data.data))
        .catch('error')
    }, [])  
    
    return (
        <div className="home">
            <h2>Selecione o filme</h2>
            <Movies movies={movies} />
        </div>
    );
}