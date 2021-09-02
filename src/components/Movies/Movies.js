import Movie from "./Movie";

import "./movies.css"

export default function Movies({ movies }) {
    return (
        <div className="movies">
            {movies.map((movie) => (<Movie movie={movie} />))}
        </div>
    );
}