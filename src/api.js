import axios from "axios";

const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies';

function getMovies() {
    const promise = axios.get(URL);
    return promise;
}

export {
    getMovies
}