import Movie from "./Movie";

import "./movies.css"

export default function Movies({ movies }) {
    return (
        <div className="movies">
            { movies.map((movie) => (<Movie key={movie.id} id={movie.id} title={movie.title} posterURL={movie.posterURL} overview={movie.overview} releaseDate={movie.releaseDate} />))}
        </div>
    );
}