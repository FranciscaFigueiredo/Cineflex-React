export default function Movie({ movie }) {
    console.log(movie.posterURL)
    return (
        <div className="movie">
            <img src={movie.posterURL} />
        </div>
    );
}